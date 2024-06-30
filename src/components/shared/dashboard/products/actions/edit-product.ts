"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { editProductSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const editProduct = async (
  // values: z.infer<typeof editProductSchema>
  id: string,
  prevState: any,
  formData: FormData
) => {
  const session = await auth();

  const validatedFields = editProductSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  console.log("validatedFields", validatedFields.error?.errors[0].message);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.errors[0].message,
    };
  }

  // const { name, description, image, price, stock } = validatedFields.data;
  const { name, description, price, stock } = validatedFields.data;

  if (session?.user?.role !== "ADMIN") {
    return {
      error: "You are not authorized to perform this action!",
    };
  }

  try {
    await db.product.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        image:
          "https://utfs.io/f/50e168a8-65cb-4ba7-a2c3-bdafbec1ef09-kgxqgl.jpg",
        price: parseFloat(price),
        stock: parseInt(stock),
      },
    });

    // return {
    //   success: "Product updated successfully!",
    // };
  } catch (error) {
    return {
      error: "An error occurred while updating the product!",
    };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};
