import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faInstagram, faYoutube, faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Footer() {

  return (
    <React.Fragment>
      <hr/>
      <div className='max-w-screen-xl container mx-auto '>
      <footer className="footer footer-center p-10 bg-white text-black  rounded">
        <nav className="grid grid-flow-col gap-4">
       
        <Link to='/' className=' font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>Home</Link>
            <Link to='/education' className='font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>Education</Link>
            <Link to='/projects' className='font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>Projects</Link>
            <Link to='/contact' className='font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>Contact</Link>
            <Link to='/about' className='font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>About</Link>
          
        </nav>
       <div>
        <h1 className='text-center text-xl font-bold'>Follow Us On</h1>
          <div className="flex flex-row space-x-6">   
            <FontAwesomeIcon size='xl' icon={faInstagram} />
            <FontAwesomeIcon size='xl' icon={faLinkedin} />
            <FontAwesomeIcon size='xl' icon={faYoutube} />
            <FontAwesomeIcon size='xl' icon={faGithub} />
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
