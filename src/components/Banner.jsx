import React from 'react'
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Banner() {
    return (
        <React.Fragment>
            <div className=' max-w-screen-2xl mx-auto container mt-[60px] bg-white text-black'>
                <div className='   flex   justify-center space-x-5  '>
                    <div className='flex  flex-col p-6 mt-[30px] justify-between md:flex-row   '>
                        {/* Left Side */}
                        <div className='md:w-[60%] text-center space-y-6 order-2 md:order-1 md:mt-[48px]'>
                            <h1 className='text-pink-500 text-center font-bold text-2xl'>Welcome To My Portfolio </h1>
                            <p className='text-center text-2xl font-bold'>Hii, I am
                                <ReactTyped
                                    loop='true'
                                    backSpeed={70}
                                    typeSpeed={70}
                                    className='text-pink-500 text-center text-2xl font-bold px-2'
                                    strings={['Atul D. Dubal', 'Programmer', 'Web Developer', 'Android Developer', 'Coder', 'YouTuber']}
                                />
                            </p>

                            <p className=' font-semibold text-start'>Web Development, Android Development, and languages like Python, Java, and PHP are where I thrive. Exploring these fields keeps me engaged in the ever-evolving world of technology. As an intern at Prodigy InfoTech and a former Android Developer Intern at NullClass, I&apos;ve gained solid experience in Android and Web Development, along with proficiency in Python and Java programming.</p>
                            {/* Social Icons */}
                            <div className='flex flex-col  space-y-3'>
                                <p className='text-left font-bold text-xl text-black'>Available On </p>
                                <ol className=' flex flex-row space-x-5'>
                                    {/* <li><FontAwesomeIcon size='xl' icon={faInstagram}/></li>
                                <li><FontAwesomeIcon size='xl' icon={faLinkedin}/></li>
                                <li><FontAwesomeIcon size='xl' icon={faYoutube}/></li>
                                <li><FontAwesomeIcon size='xl' icon={faGithub}/></li> */}

                                    <button className=" rounded-md bg-[#E1306C] hover:opacity-90 duration-200 px-2 py-2 text-white  text-sm"><FontAwesomeIcon size='xl' icon={faInstagram} /> Instagram</button>

                                    <button className=" rounded-md bg-blue-700 hover:bg-blue-900 duration-200 px-2 py-2 text-white  text-sm"><FontAwesomeIcon size='xl' icon={faLinkedin} /> Linkdin</button>

                                    <button className=" rounded-md bg-black hover:bg-slate-900 duration-200 px-2 py-2 text-white  text-sm"><FontAwesomeIcon size='xl' icon={faGithub} /> GitHub</button>

                                    <button className=" rounded-md bg-red-600 hover:bg-red-700 duration-200 px-2 py-2 text-white  text-sm"><FontAwesomeIcon size='xl' icon={faYoutube} /> YouTube</button>
                                </ol>
                            </div>

                            {/* Email Input */}
                            <label className="input  border-black bg-white text-black flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" className="grow outline-black" placeholder="Email" />
                            </label>
                            <button className='bg-pink-600 px-4 py-2 flex start-0 rounded-md hover:bg-pink-300 duration-500 ease-in-out'>Lets Connect</button>
                        </div>
                        {/* Right Side */}
                        <div className=' order-1 md:order-2 '>
                            <img className='w-[350px] md:w-[500px] hover:scale-110 duration-300' src='/developer_img.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner
