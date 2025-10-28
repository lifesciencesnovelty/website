import Intro from '@/components/aboutUs/Intro'
import Journey from '@/components/aboutUs/Journey'
import Portfolio from '@/components/aboutUs/Portfolio'
import Quality from '@/components/aboutUs/Quality'
import Stats from '@/components/aboutUs/Stats'
import Vision from '@/components/aboutUs/Vision'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Journey/>
        <Stats/>
                      <Portfolio/>
        <Quality/>
        <Vision/>
        
        <Footer/>
    </div>
  )
}

export default About;