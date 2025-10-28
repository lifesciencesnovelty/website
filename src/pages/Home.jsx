
import About from '@/components/About'
import Contact from '@/components/Contact'
import Focus from '@/components/Focus'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Positives from '@/components/Positives'
import Range from '@/components/Range'
import React from 'react'
import Appointment from '@/components/Appointment'
import BrochureSection from '@/components/BrochureSection'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    
    <Focus/>
    <Range/>
       

    <Positives/>
    <Appointment/>
    <Footer/>
    </>
  )
}

export default Home