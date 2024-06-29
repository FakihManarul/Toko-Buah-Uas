// lib/auth.ts

import { z } from "zod";
import { prisma } from "./prisma";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const JWT_SECRET = "your_secret_key";

export const generateToken = (userId: string): string => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
  return token;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string | null> => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return null;
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    return null;
  }

  const token = generateToken(user.id);
  return token;
};

const AuthSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  password: z.string().min(1),
});

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const validatedFields = AuthSchema.safeParse({ name, email, password });

  if (!validatedFields.success) {
    throw new Error("Validation failed");
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        password: validatedFields.data.password,
      },
    });
    console.log("User created successfully:", newUser);
    return newUser;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw new Error("Failed to create user");
  }
};
