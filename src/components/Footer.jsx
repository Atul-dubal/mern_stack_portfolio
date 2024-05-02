import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faInstagram, faYoutube, faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { REACT_APP_GITHUB_URL, REACT_APP_INSTAGRAM_ID,REACT_APP_LINKDIN_URL,REACT_APP_YOUTUBE_URL } from '../config';


function Footer() {

  return (
    <React.Fragment>
      <hr/>
      <div className='max-w-screen container mx-auto '>
      <footer className="footer footer-center p-5 bg-white text-black  rounded">
        <nav className="grid grid-flow-col gap-4">
       
        <Link to='/' className=' font-bold text-sm hover:text-blue-800 hover:scale-110 hover:duration-200'>Home</Link>
            <Link to='/education' className='font-bold text-sm hover:text-blue-800 hover:scale-110 hover:duration-200'>Education</Link>
            <Link to='/projects' className='font-bold text-sm hover:text-blue-800 hover:scale-110 hover:duration-200'>Projects</Link>
            <Link to='/contact' className='font-bold text-sm hover:text-blue-800 hover:scale-110 hover:duration-200'>Contact</Link>
            <Link to='/about' className='font-bold text-sm hover:text-blue-800 hover:scale-110 hover:duration-200'>About</Link>
          
        </nav>
       <div>
        <h1 className='text-center text-xl font-bold'>Follow Us On</h1>
          <div className="flex flex-row space-x-4">   
          <a href={REACT_APP_INSTAGRAM_ID} target='_blank' ><FontAwesomeIcon size='xl' icon={faInstagram} /></a>
          <a href={REACT_APP_LINKDIN_URL} target='_blank' ><FontAwesomeIcon size='xl' icon={faLinkedin} /></a>
          <a href={REACT_APP_YOUTUBE_URL} target='_blank' ><FontAwesomeIcon size='xl' icon={faYoutube} /></a>
          <a href={REACT_APP_GITHUB_URL} target='_blank' ><FontAwesomeIcon size='xl' icon={faGithub} /></a>
            </div>
        </div>
        <aside>
          <p className='text-md font-bold'>Copyright © 2024 - All right reserved by AP Coders</p>
        </aside>
      </footer>
      </div>
    </React.Fragment>
  )
}

export default Footer
