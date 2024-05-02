import React from 'react'

function ProjectCard() {
    return (
        <React.Fragment>
            <div className='flex flex-col md:flex-row justify-start w-[100%] m-5 bg-slate-200 border space-y-3 shadow-xl space-x-3 rounded-xl p-3 hover:scale-105 duration-700'>
                <div className=' w-[100%] md:w-[50%] flex flex-col justify-self-start space-y-4 '>
                    <div className='flex flex-row items-center space-x-4'>
                        <img className=' w-20 rounded-xl border-black' src='/js_logo.png' alt='' />
                        <p className='text-center text-xl '>Project name</p>
                    </div>
                    <p className='text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita iusto, corrupti facere, voluptatibus harum velit praesentium temporibus odit deserunt quo autem commodi porro dicta vero, saepe libero nisi alias.</p>
                    <button className='btn w-56'>See Project Source Code</button>
                </div>
                <div className='justify-center w-[100%] md:w-[50%]'>

                    <img className='w-[100%] rounded-lg border-black' src='/about_us.jpg' alt='' />

                </div>
            </div>
        </React.Fragment>
    )
}

export default ProjectCard
