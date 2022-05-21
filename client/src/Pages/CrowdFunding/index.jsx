import React from 'react'
import Navbar from '../../component/Navbar'
import Project from '../../component/Project'
import StartProject from '../../component/StartProject'
import { TransactionContext } from '../../Context/TransactionContext'

export default function CrowdFunding() {
  const {projects} = React.useContext(TransactionContext)
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar />
        </div>
        <div className="gradient-bg-welcome pt-10">
          <div className='flex justify-center'>
            <div className='text-center'>
        <h1 className="text-white font-black mb-3">
              Crowdfunding
        </h1>
            <p className="text-white font-semibold">
              Utilizing Ethereum for Decentralized Crowdfunding
            </p>
          <div className='py-10'>
            <StartProject />
          </div>
            </div>
          </div>
          <div className="mf:flex-row flex-col items-start  md:p-20 py-12 px-4">
          <h1 className='text-white py-5'>Projects</h1>
          {projects?.length > 0 && projects?.map((project, index) => <Project data={project} key={index}/>)}
          {/* <Project /> */}
          </div>
        </div>
    </div>
  )
}
