"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteProduct = async (id: string) => {
  try {
    await db.product.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard");
  } catch (error) {
    return {
      error: "An error occured while deleting the product!",
    };
  }
};
