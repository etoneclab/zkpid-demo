import { NextApiRequest, NextApiResponse } from "next/types";

interface ResponseData {
  message: string
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<ResponseData>) {
  // connect wallet....
  console.log('BODY', req.body)
  res.status(200).json({})
}