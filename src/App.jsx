// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Education from './pages/Education'
import Projects from './pages/Projects'

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/education' element={<Education/> } />
      <Route path='/projects' element={<Projects/> } />
      <Route path='/contact' element={<Contact/> } />
      <Route path='/about' element={<About/> } />
    </Routes>
  )
}

export default App
