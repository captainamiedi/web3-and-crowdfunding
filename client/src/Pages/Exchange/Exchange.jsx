import React from 'react'
import ExchangeTable from '../../component/ExchangeTable'
import Navbar from '../../component/Navbar'
import { TransactionContext } from '../../Context/TransactionContext'

export default function Exchange() {
    const {crytoMarketCap, marketCapData} = React.useContext(TransactionContext)
    React.useEffect(() => {
        crytoMarketCap()
    }, [])
    
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar />
        </div>
        <div className="gradient-bg-welcome flex justify-center pt-10">
            <ExchangeTable data={marketCapData} />

        </div>
    </div>
  )
}
