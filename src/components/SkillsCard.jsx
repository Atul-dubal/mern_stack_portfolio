import React from 'react'

function SkillsCard(prop) {
    const skills_dat = [...prop.skills]
    // console.log(skills_dat)
    return (
        <React.Fragment>
            {skills_dat.map((curEle) => {
                return <div key={curEle.id} className='w-[150px] rounded-md m-5 text-center text-xl font-bold bg-white border p-3 shadow-lg hover:scale-105 duration-300'>
                    <img src={curEle.logo} alt='' />
                </div>
            })}

        </React.Fragment>
    )
}

export default SkillsCard
