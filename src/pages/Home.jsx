
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import '../index.css'
import { SpeedInsights } from "@vercel/speed-insights/react"
function Home() {
  return (
    <React.Fragment>
      <SpeedInsights/>
      <Navbar />
      <Banner/>
      <hr/>
      <Footer />
    </React.Fragment>
  )
}

export default Home
