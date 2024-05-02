// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <>
      <Navbar />
      <div className='mt-[60px] py-[20px] bg-white text-black max-w-screen-lg mx-auto container'>
        <h1 className='text-center font-bold text-2xl my-5'>Projects</h1>
        <ProjectCard type='BE ECS' school='Pillai HOC Collage of Engineering & Technology, Rasayni, 410207' marks='CGPA : 8.5' />
        <ProjectCard type='BE ECS' school='Pillai HOC Collage of Engineering & Technology, Rasayni, 410207' marks='CGPA : 8.5' />

      </div>
      <Footer />
    </>
  )
}

export default Projects
