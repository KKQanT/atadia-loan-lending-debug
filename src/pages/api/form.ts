import type { NextApiRequest, NextApiResponse } from "next";
import { PublicKey } from '@solana/web3.js'
 
type Data = {
  first: string,
  last: string,
  walletAdress: string | null,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body

  console.log('body: ', body)

  if (!body.first || !body.last) {
    return res.status(400).json( {first:'failed', last:'failed', walletAdress:null} )
  }

  res.status(200).json({first: `${body.first}`, 
  last: `${body.last}`, 
  walletAdress:`${body.walletAdress}`
})
}