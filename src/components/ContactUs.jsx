// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
function ContactUs() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto container mt-[60px] bg-white text-black my-4'>
        <h1 className='text-center font-bold py-[30px] text-2xl'>Contact Us</h1>
        <div className='flex flex-col  justify-evenly  md:flex-row '>

          {/* Left Side Image */}
          <div className='flex justify-center '>
            <img className=' w-[250px] md:w-[450px] start-0 hover:scale-110 duration-300' src='/contact_us.jpg' alt='' />
          </div>
          {/* Right Side Options */}
          <div className='  text-black px-5 md:w-96'>
            <form action='' method='' className=' space-y-3'>
              <label>Full Name : </label>
              <br />
              <input type='text' className=' w-80 outline-none border-[2px] px-2 py-1 rounded-md bg-white text-black' placeholder='Enter Your Name ' />
              <br />
              <label>Email : </label>
              <br />
              <input type='email' className=' w-80 outline-none border-[2px] px-2 py-1 rounded-md bg-white text-black' placeholder='Enter Your Email ' />
              <br />
              <label>Phone Number : </label>
              <br />
              <input type='number' className=' w-80 outline-none border-[2px] px-2 py-1 rounded-md bg-white text-black' placeholder='Enter Your Phone Number ' />
              <br />
              <label>Message : </label>
              <br />
              <textarea rows='4' type='text' className=' w-80 outline-none border-[2px] px-2 py-1 rounded-md bg-white text-black' placeholder='Enter Message Here!! ' />
              <br />
              <input type='submit' value='Submit' className='bg-pink-500 cursor-pointer px-3 py-2 rounded-md hover:bg-pink-700 hover:scale-110 duration-300' />
            </form>
          </div>

        </div>
        <div className='flex flex-col text-center space-y-3 pt-10'>
          <h1 className='text-xl font-bold '>Connect Us On </h1>
          <ol className='flex flex-row space-x-5 justify-center'>
          <button className=" rounded-md bg-[#E1306C] hover:opacity-90 duration-200 px-2 py-2 text-white  text-sm"><FontAwesomeIcon size='xl' icon={faInstagram} /> Instagram</button>
                          
                          <button className=" rounded-md bg-blue-700 hover:bg-blue-900 duration-200 px-2 py-2 text-white  text-sm"><FontAwesomeIcon size='xl' icon={faLinkedin} /> Linkdin</button>
                   
                          <button className=" rounded-md bg-black hover:bg-slate-900 duration-200 px-2 py-2 text-white  text-sm"><FontAwesomeIcon size='xl' icon={faGithub} /> GitHub</button>
                   
                          <button className=" rounded-md bg-red-600 hover:bg-red-700 duration-200 px-2 py-2 text-white  text-sm"><FontAwesomeIcon size='xl' icon={faYoutube} /> YouTube</button>
                          
          </ol>
        </div>
      </div>
    </>
  )
}

export default ContactUs
