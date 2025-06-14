import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import ProjectSect from '../Components/ProjectSect'
import ContactSec from '../Components/ContactSec'

const Home = () => {
  return (
    <div className=''>
        {/* Navbar */}
        <Navbar/>
        {/* Hero */}
        <Hero/>
        {/* About Me */}
        <AboutMe/>
        {/* Skills */}
        <Skills/>
        {/* Projects */}
        <ProjectSect/>
        {/* Contact */}
        <ContactSec/>
    </div>
  )
}

export default Home