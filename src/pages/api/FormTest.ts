import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
      return await createFormTest(req, res);
    }
    else {
      return res.status(405).json({ message:'method not allowed', success:false})
    }
}

async function createFormTest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  
  try {
    const newEntry = await prisma.formTest.create({
      data: {
        first: body.first,
        last: body.last,
        walletAddress: body.walletAddress,
      }
    });
    return res.status(200).json(newEntry); //success : true?????????
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: 'Error creating data', success: false });
  }
}