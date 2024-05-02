import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
function ProjectCard() {
    return (
        <React.Fragment>
            <div className='flex flex-col md:flex-row  w-[90%] my-5 mx-auto bg-slate-200 border space-y-3 shadow-xl space-x-3 rounded-xl p-3 hover:scale-105 duration-700'>
                <div className=' w-[100%] md:w-[60%] flex flex-col justify-self-start space-y-4 '>
                    <div className='flex flex-row items-center space-x-4'>
                        <img className=' w-20 rounded-xl border-black' src='/images/js_logo.png' alt='' />
                        <p className='text-center text-xl '>Project name</p>
                    </div>
                    <p className='text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita iusto, corrupti facere, voluptatibus harum velit praesentium temporibus odit deserunt quo autem commodi porro dicta vero, saepe libero nisi alias.</p>
                    <button className='px-2 py-2 rounded-md shadow-lg text-white  bg-blue-600 border-none w-56'>See Project Source Code</button>
                </div>
                <div className='flex justify-center mx-auto w-[90%] md:w-[40%]'>
                <Carousel infiniteLoop={true} showIndicators={false}  autoPlay={true} showStatus={true} showThumbs={false}>
                    <div className='md:w-[90%] mx-auto flex justify-center flex-row'>
                        <img className='w-[100%] rounded-lg border-black' src='/images/about_us.jpg' alt='' />
                    </div>
                    <div className='md:w-[100%]'>
                        <img className='w-[100%] rounded-lg border-black' src='/images/contact_us.jpg' alt='' />
                    </div>
                </Carousel>
            </div>
        </div>
        </React.Fragment >
    )
}

export default ProjectCard
