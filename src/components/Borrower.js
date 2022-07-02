import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';

const Borrower = () => {
    const[loanreq,setLoanreq] = useState(0);
    const contract = GetContract();
    const addamt = async() =>{
        await contract.borrow_amt(loanreq);
    }
    return (
        <div>
            <input onChange={e => setLoanreq(e.target.value)}/>
            <button onClick={addamt}></button>
        </div>
    );
}
 
export default Borrower;