import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./prisma";
import { z } from "zod";
import bcrypt from "bcrypt";

const AuthSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  password: z.string().min(1),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const validatedFields = AuthSchema.safeParse(req.body);

    if (!validatedFields.success) {
      return res.status(400).json({
        error: validatedFields.error.flatten().fieldErrors,
      });
    }

    const { name, email, password } = validatedFields.data;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to create user" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
