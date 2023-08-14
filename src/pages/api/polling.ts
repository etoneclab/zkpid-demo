import RedisService from "@/redis";
import { NextApiRequest, NextApiResponse } from "next/types";

interface ResponseData {
  jwt?: string
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<ResponseData>) {
  let uid = req.body.uid 
  let val = await RedisService.getInstance().getClient().get(uid)
  if (val) {
    res.status(200).json({jwt: val})
  } else {
    res.status(404).json({})
  }
}