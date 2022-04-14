import React from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import Services from '../../component/Services'
import Tranactions from '../../component/Tranactions'
import Welcome from '../../component/Welcome'

export default function HomePage() {
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
        </div>
        <Services />
        <Tranactions />
        <Footer />
    </div>
  )
}
