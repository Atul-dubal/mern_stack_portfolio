
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EducationCard from '../components/EducationCard'
import SkillsCard from '../components/SkillsCard'

function Education() {

  const skills_data = [
    {
      id: 1,
      name: 'HTML',
      logo: '/html-5-logo.png'
    },
    {
      id: 2,
      name: 'CSS',
      logo: '/css.png'
    },
    {
      id: 3,
      name: 'JS',
      logo: '/js_logo.png'
    },
    {
      id: 4,
      name: 'PHP',
      logo: '/php.png'
    },
    {
      id: 5,
      name: 'Mysql',
      logo: '/mysql.png'
    },
    {
      id: 6,
      name: 'NODEJS',
      logo: '/nodejs.png'
    },
    {
      id: 7,
      name: 'JS',
      logo: '/reactjs.png'
    }
  ];

  return (
    <React.Fragment>
      <Navbar />
      <div className='max-w-screen-xl mx-auto container mt-[60px] py-[30px] bg-white text-black'>
        {/* Education */}
        <div className=''>
          <h1 className='text-center font-bold text-black text-2xl my-5'>Education</h1>
          <div className=' grid grid-cols-1 md:grid-cols-2 '>
            <EducationCard type='SSC' school='Sudhagad Education Society Secondary & Higher Secondary School Kalmabol,Navi Mumnbai, 410218' marks='91%' />
            <EducationCard type='HSC' school='Sudhagad Education Society Secondary & Higher Secondary School Kalmabol,Navi Mumnbai, 410218' marks='59%' />
            <EducationCard type='BE ECS' school='Pillai HOC Collage of Engineering & Technology, Rasayni, 410207' marks='CGPA : 8.5' />

          </div>
        </div>
        {/* Skills */}
        <div >
          <h1 className='text-center font-bold text-black text-2xl my-5'>Skills</h1>
          <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  my-5 '>
           
              <SkillsCard skills={skills_data} />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Education
