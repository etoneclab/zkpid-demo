import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next/types'

interface ResponseData {
  authToken?: string
  message?: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let token = ''
  let url = process.env.ZKPID_AUTH_URL + '/papi/auth'
  try {
    const response = await axios.post(
      url,
      {
        customer_id: process.env.ZKPID_CUSTOMER_ID,
        secret_key: process.env.ZKPID_SECRET_KEY
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    token = response.data.token
  } catch (e) {
    // console.log(e)
    res.status(500).json({ message: 'Error on connection' })
    return
  }
  console.log('>>>', token)
  if (!token) {
    res.status(403).json({ authToken: '' })
    return
  }

  console.log('BODY:', req.body.address)
  url = process.env.ZKPID_URL + '/v1/api/startkyc'
  try {
    const response = await axios.post(
      url,
      {
        address: req.body.address,
        uid: req.body.uid,
        test: req.body.test
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Token': token
        }
      }
    )
    console.log('>>><<<', response.data)

    res.status(200).json(response.data)
  } catch (e) {
    // console.log(e)
    res.status(500).json({ authToken: '' })
  }
}
