// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const file = await fs.readFile(process.cwd() + "/db/cart.json", "utf8");
      return res.status(200).json(JSON.parse(file));
    }
    if (req.method === "POST") {
      await fs.writeFile(
        process.cwd() + "/db/cart.json",
        JSON.stringify(req.body)
      );
      return res.status(200).json({ message: "success" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Failed to process", error });
  }
}
