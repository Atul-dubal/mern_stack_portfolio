
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import '../index.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"


function Home() {
  
  return (
    <React.Fragment>
      <Analytics/>
      <SpeedInsights/>
      <Navbar />
      <Banner/>
      <hr/>
      <Footer />
    </React.Fragment>
  )
}

export default Home
