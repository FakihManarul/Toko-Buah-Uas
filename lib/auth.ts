// lib/auth.ts
"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
        password: validatedFields.data.password, // Ideally, hash the password before storing
      },
    });
    console.log("User created successfully:", newUser);
    return newUser; // Optionally return the created user
  } catch (error) {
    console.error("Failed to create user:", error);
    throw new Error("Failed to create user");
  }
};
