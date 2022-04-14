//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transactions {
    uint transactionCounter;

    event Transfer(address from, address receiver, uint amount, uint timeStamp, string message, string keyword);
    
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        uint timeStamp;
        string message;
        string keyword;
    }

    TransferStruct[] transactions;

    function AddTransaction(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCounter += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, block.timestamp, message, keyword));
        emit Transfer(msg.sender, receiver, amount, block.timestamp, message, keyword);
    }

    function getAllTransaction() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint) {
        return transactionCounter;
    }
}