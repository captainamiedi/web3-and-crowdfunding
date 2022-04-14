import React, {useEffect, useState} from "react";
import {ethers} from 'ethers'
import axios from 'axios'
import {contractAbi, contractAddress} from '../utilis/constant'

export const TransactionContext = React.createContext()

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer)
    return transactionContract;
}

export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [transactionCount, setTransactionCount] =  useState(localStorage.getItem('transactionCount'))
    const [transactions, setTransactions] = useState([]);
    const [marketCapData, setMarketCapData] = useState([])
    const handleChange = ({target: {name, value}}) => {
        setFormData({...formData, [name]: value})
    }

    const getAllTransactions = async () => {
        try {
            if (!ethereum) return alert('Please install meta mask')
            const transactionContract = getEthereumContract()
            const availableTransactions =  await transactionContract.getAllTransaction();

            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timeStamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
              }));

            setTransactions(structuredTransactions);
        } catch (error) {
            console.log(error);
            throw new Error('no ethereum')
        }
    }
    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert('Please install meta mask')
    
            const account = await ethereum.request({ method: 'eth_accounts'})
    
            if (account.length > 0) {
                setCurrentAccount(account[0])
                getAllTransactions()
            } else {
                console.log('no account found');
            }   
        } catch (error) {
            console.log(error);
            throw new Error('no ethereum') 
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install meta mask')
            const account = await ethereum.request({ method: 'eth_requestAccounts'})
            setCurrentAccount(account[0])
        } catch (error) {
            console.log(error);
            throw new Error('no ethereum')
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert('Please install meta mask')

            const {addressTo, amount, keyword, message} = formData
            const parsedAmount = ethers.utils.parseEther(amount);
            const transactionContract = getEthereumContract()
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: parsedAmount._hex
                }]
            })

            const transactionHash = await transactionContract.AddTransaction(addressTo, parsedAmount, message, keyword)
            setIsLoading(true)
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait()
            setIsLoading(false)
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber())

            window.reload()
        } catch (error) {
            console.log(error);
            throw new Error('no ethereum')
        }
    }

    const checkIfTransactionExist = async () => {
        try {
            const transactionContract = getEthereumContract()
            const transactionCount = await transactionContract.getTransactionCount();
            localStorage.setItem('transactionCount', transactionCount)
        } catch (error) {
            console.log(error);
            throw new Error('no ethereum')
        }
    }

    const crytoMarketCap = async () => {
        try {
            const url = encodeURI('1h,24h,7d')
           const resp = await axios.get(`https://api.coingecko.com/api/v3//coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=${url}`)
           const data = await resp.data
        //    console.log(RiWubiInput, 'data');
           setMarketCapData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      checkIfWalletIsConnected()
      checkIfTransactionExist()
    }, [])
    
    return (
        <TransactionContext.Provider value={{
            connectWallet,
            currentAccount,
            formData,
            setFormData,
            handleChange,
            sendTransaction,
            transactions,
            isLoading,
            marketCapData,
            crytoMarketCap
        }}>
            {children}
        </TransactionContext.Provider>
    )
}