"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { CreateProductSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const createProduct = async (
  values: z.infer<typeof CreateProductSchema>
) => {
  const session = await auth();

  const validatedFields = CreateProductSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0].message,
    };
  }

  const { name, description, image, price, stock } = validatedFields.data;

  if (session?.user?.role !== "ADMIN") {
    return {
      error: "You are not authorized to perform this action!",
    };
  }

  try {
    if (session.user.id) {
      await db.product.create({
        data: {
          name,
          description,
          image,
          price,
          stock,
          userId: session.user.id,
        },
      });
    }

    revalidatePath("/dashboard");

    return {
      success: "Product created successfully!",
    };
  } catch (error) {
    return {
      error: "An error occurred while creating the product!",
    };
  }
};
