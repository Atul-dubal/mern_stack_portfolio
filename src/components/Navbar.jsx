import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {REACT_APP_INSTAGRAM_ID,REACT_APP_LINKDIN_URL} from '../config'



const Navbar = () => {
    const Navbar_Items = () => {
        return (
            <>
                <Link to='/' className=' font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>Home</Link>
                <Link to='/education' className='font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>Education</Link>
                {/* <Link to='/skills' className='hover:text-blue-800 hover:scale-110 hover:duration-200'>Skills</Link> */}
                <Link to='/projects' className='font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>Projects</Link>
                <Link to='/contact' className='font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>Contact</Link>
                <Link to='/about' className='font-bold text-lg hover:text-blue-800 hover:scale-110 hover:duration-200'>About</Link>
            </>
        )
    }
    return (
        <React.Fragment>
            <div className=' max-w-screen-2xl z-50 md:px-[150px] mx-auto container  fixed top-0 left-0 right-0 shadow-sm bg-slate-200 text-black'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                                <Navbar_Items />
                            </ul>
                        </div>
                        <Link to='/' className="text-2xl cursor-pointer font-bold">Atul<span className='text-pink-500'>Dubal</span> </Link>
                    </div>
                    <div className="navbar-end w-[75%] space-x-4">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 space-x-6">
                                <Navbar_Items />
                            </ul>
                        </div>

                        <a href={REACT_APP_INSTAGRAM_ID} target='_blank' >   <button className=" items-center rounded-md hidden md:flex bg-[#E1306C] hover:opacity-90 duration-200 px-2 py-2 text-white  text-sm"> <FontAwesomeIcon className='p-1' icon={faInstagram} /> Instagram</button></a>

                        <a href={REACT_APP_LINKDIN_URL} target='_blank' >  <button className="items-center rounded-md hidden md:flex bg-blue-700 hover:bg-blue-900 duration-200 px-2 py-2 text-white  text-sm"> <FontAwesomeIcon className='p-1' icon={faLinkedin} /> Linkdin</button></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar
