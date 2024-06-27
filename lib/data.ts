import { number } from "zod";
import { prisma } from "./prisma";
import { resolve } from "path";

const ITEMS_PER_PAGE = 5;

export const getBuah = async (query: string, currentPage: number) => {
  const offset = (currentPage-1) * ITEMS_PER_PAGE;
  try {
    const buahs = await prisma.buah.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            buah: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            harga: {
              contains: query,
              mode: "insensitive", // Corrected "inesensitive" to "insensitive"
            },
          },
        ],
      },
    });
    return buahs;
  } catch (error: any) {
    throw new Error("Failed to fetch contact data");
  }
};

export const getBuahById = async (id: string) => {
  try {
    const buah = await prisma.buah.findUnique({
      where: { id },
    });

    return buah;
  } catch (error: any) {
    throw new Error("Failed to fetch contact data");
  }
};

export const getBuahPages = async (query: string) => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const buahs = await prisma.buah.count({
      where: {
        OR: [
          {
            buah: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            harga: {
              contains: query,
              mode: "insensitive", // Corrected "inesensitive" to "insensitive"
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(buahs)/ITEMS_PER_PAGE)
    return totalPages;
  } catch (error: any) {
    throw new Error("Failed to fetch contact data");
  }
};