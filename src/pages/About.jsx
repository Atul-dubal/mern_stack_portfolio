
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function About() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='max-w-screen-xl mx-auto container mt-[60px] py-12 bg-white text-black '>
        <div className='flex flex-col md:flex-row justify-center  md:justify-around space-y-5'>
          {/* Image Side */}
          <div className='w-[100%] md:w-[500px] flex justify-center order-1 md:order-2 opacity-100 hover:scale-105 duration-500'>
            <img className=' w-[250px] rounded-lg md:w-[100%] ' src='/about_us.jpg' alt='' />
          </div>
          {/* Information Side */}
          <div className='w-[100%] flex justify-center flex-col space-y-3 order-2 md:order-1 px-3'>
            <h1 className='text-xl font-bold text-pink-700 text-center'>Atul Dattatray Dubal</h1>
            <p>
              Hey there, I&apos;m Atul Dubal, currently in my second year of Engineering at Pillai HOC College of Engineering and Technology, Rasayni. I&apos;m all about fostering creativity and development, constantly on the lookout for ways to expand my skill sets and dive into new areas of learning.
            </p><p>
              Web Development, Android Development, and languages like Python, Java, and PHP are where I thrive. Exploring these fields keeps me engaged in the ever-evolving world of technology. As an intern at Prodigy InfoTech and a former Android Developer Intern at NullClass, I&apos;ve gained solid experience in Android and Web Development, along with proficiency in Python and Java programming.
            </p><p>
              Driven by curiosity and a hunger for growth, I&apos;m committed to pushing boundaries and making my mark in the tech industry.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default About
