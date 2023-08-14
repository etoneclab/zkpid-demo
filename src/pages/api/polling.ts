import { NextApiRequest, NextApiResponse } from "next/types";

interface ResponseData {
  message: string
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<ResponseData>) {
  res.status(200).json({})
}