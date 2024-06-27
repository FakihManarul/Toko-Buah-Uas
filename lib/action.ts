"use server";

import {z} from "zod"
import {prisma} from "./prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ProductSchema = z.object({
    buah: z.string().min(1),
    harga: z.string().min(1),
})

export const SaveProduct = async (prevState: any, formData: FormData) => {
    const validatedFields = ProductSchema.safeParse (Object.fromEntries(formData.entries()));
    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.buah.create({
            data: {
                buah: validatedFields.data.buah,
                harga: validatedFields.data.harga
            }
        })
    }catch (error) {
        return {message: "Failed to create buah"}
    }

    revalidatePath("/products")
    redirect("/products")
};

export const updateProduct = async (id:string, prevState: any, formData: FormData) => {
    const validatedFields = ProductSchema.safeParse (Object.fromEntries(formData.entries()));
    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.buah.update({
            data: {
                buah: validatedFields.data.buah,
                harga: validatedFields.data.harga
            },
            where:{id}
        });
    }catch (error) {
        return {message: "Failed to update buah"}
    }

    revalidatePath("/products")
    redirect("/products")
};

export const deleteProduct = async (id:string) => {
    try {
        await prisma.buah.delete({
            where: {id},
        });
    }catch (error) {
        return {message: "Failed to delete buah"}
    }

    revalidatePath("/products")
};