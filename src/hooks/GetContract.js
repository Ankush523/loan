import React from 'react';
import { useContract } from 'wagmi';
import LoanABI from '../contracts/ABIs/LoanABI.json'
import { useSigner } from 'wagmi';
const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xbf3e875D77650bd644E27E66136CD1c72937149D',
        contractInterface: LoanABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;