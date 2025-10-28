import React from 'react'
import { useNavigate } from 'react-router-dom'

const Appointment = () => {
  const navigate = useNavigate();
  return (
    <div className='relative w-full'>
        <div className="absolute inset-0 bg-cover bg-center"
    style={{backgroundImage : "url('/doodle2.jpg')"}}
    >
      <div className="w-full h-full bg-blue-950 opacity-93"></div>
    </div>
    <div className='relative z-10 min-h-[520px] mx-auto py-20 px-4 flex flex-col items-center justify-center text-center'>
        
        <h4 className='text-lg text-white font-semibold mb-2'>Make an Appointment</h4>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>If You Have Any Concerns,Please Contact Us</h2>
        <button onClick={() => navigate("/contact")} className='text-white px-6 py-3 shadow border border-white hover:bg-white hover:text-orange-400 transition'>Contact Us</button>
    </div>
    </div>
  )
}

export default Appointment