// eslint-disable-next-line no-unused-vars
import React from 'react'

function ContactUs() {
  return (
    <>
      <div className='max-w-screen mx-auto container mt-[60px] bg-white text-black my-4'>
        <h1 className='text-center font-bold py-[30px] text-2xl'>Contact Us</h1>
        <div className='flex flex-col justify-around  md:flex-row '>

          {/* Left Side Image */}
          <div className='flex justify-center'>
            <img className=' w-[200px] md:w-[350px] start-0' src='/contact_us.jpg' alt='' />
          </div>
          {/* Right Side Options */}
          <div className=' bg-white text-black px-5'>
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
              <li>Insta</li>
              <li>YouTube</li>
              <li>Linkdin</li>
              <li>GitHub</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default ContactUs
