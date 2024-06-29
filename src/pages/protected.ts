// src/pages/api/protected.ts
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../app/lib/auth"; // Ensure JWT_SECRET is properly imported

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const userId = decoded.userId;

    // Perform authentication logic here
    // Example: Fetch user data from database

    res.status(200).json({ message: "Authorized", userId });
  } catch (error) {
    console.error("Authorization failed:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
}
