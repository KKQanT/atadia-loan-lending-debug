import { useWallet } from "@solana/wallet-adapter-react";
import { FC, useCallback } from 'react';
import { notify } from "utils/notifications";

export const SubmitForm: FC = () => {
  
  const { publicKey } = useWallet();
  
  const handleSubmit = async (event:any) => {
    
    event.preventDefault();

    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      walletAdress: publicKey!.toBase58()
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = 'api/form';

    const options = {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)

    const result: any = await response.json()
    //.then( 
    //  (x: any) => alert(`response: ${x.data}`)
    //  )
    };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first">First Name</label>
      <input type='text' id='first' name='first' required/>
      
      <label htmlFor="last">Last Name</label>
      <input type="text" id='last' name='last' required/>

      <button type="submit" disabled={!publicKey}>Submit</button>
    </form>
  )
}