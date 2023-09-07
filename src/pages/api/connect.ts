import RedisService from "@/redis";
import { NextApiRequest, NextApiResponse } from "next/types";

interface ResponseData {
  message?: string
}

RedisService.getInstance().getClient()

export default async function handler(req:NextApiRequest, res:NextApiResponse<ResponseData>) {
  // connect wallet....
  console.log('BODY', req.body)
  await RedisService.getInstance().getClient().setEx(req.body.data.uid, 3600, req.body.payload.data.jwt)
  res.status(200).json({})
}


