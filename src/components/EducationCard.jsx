import React from 'react'

function EducationCard(prop) {
    return (
        <React.Fragment>

                <div className="card card-side mx-3 h-[200px]  m-5 shadow-2xl hover:scale-105 duration-300">
                    <figure><img className='w-[280px]' src="/images/books.png" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{prop.type}</h2>
                        <p className=' text-sm'>{prop.school}</p>
                        <p>Marks : {prop.marks}</p>
                    </div>
                </div>
          

        </React.Fragment>
    )
}

export default EducationCard
