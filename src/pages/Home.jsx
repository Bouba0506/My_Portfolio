import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'

const Home = () => {
  return (
    <div className=''>
        {/* Navbar */}
        <Navbar/>
        {/* Hero */}
        <Hero/>
        {/* About Me */}
        <AboutMe/>
    </div>
  )
}

export default Home