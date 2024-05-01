
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import '../index.css'

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner/>
      <hr/>
      <Footer />
    </React.Fragment>
  )
}

export default Home
