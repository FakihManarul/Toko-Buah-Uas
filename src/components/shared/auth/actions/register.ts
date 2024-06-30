"use server";

import bcrypt from "bcrypt";
import { RegisterSchema } from "../../../../schemas";
import { z } from "zod";
import { db } from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { firstName, lastName, email, password } = values;

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return {
      error: "User already exists!",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  return {
    success: "User created!",
  };
};
