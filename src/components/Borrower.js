import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';

const Borrower = () => {
    const contract = GetContract();
    const[loanreq,setLoanreq] = useState(0);
    const addamt = async() => {
    await contract.borrow_amt(loanreq);
    }
    return (
        <div>
            <input onChange={e => setLoanreq(e.target.value)}/>
            <button onClick={addamt}>Enter</button>
        </div>
    );
}
 
export default Borrower;