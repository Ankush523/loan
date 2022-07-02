//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Loans{

    uint loanid;
    uint bidid;
    struct Loan_request {
        uint loanid;
        address borrower;
        uint amount;
    }

    struct Loan_bid{
        uint loanid;
        address lender;
        uint interest;
        uint bidid;
    }

    struct Loan_accept{
        address borrower;
        address lender;
        uint amount;
        uint interest;
        uint bidid;
        bool repay;
    }

    mapping(address => mapping(uint => Loan_request)) requests;
    mapping(address => mapping(uint => Loan_bid)) bids;
    mapping(address => mapping(uint => Loan_accept)) accept;


    function receiveid() external view returns (uint){
        return loanid;
    }

    function borrow_amt(uint _amount)external{
        ++loanid;
        requests[msg.sender][loanid]=Loan_request(loanid,msg.sender,_amount);
    }

    function bid(uint _interest,uint _loanid) external{
        ++bidid;
        bids[msg.sender][loanid]=Loan_bid(_loanid,msg.sender,_interest,bidid);
    }

    

}
