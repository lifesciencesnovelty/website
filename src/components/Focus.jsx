import { areas } from '@/data';
import React from 'react'

const Focus = () => {
  return (
    <div className='relative flex flex-col gap-12 px-4 sm:px-6 lg:px-16 py-12'>
        <div
        className='absolute inset-0 z-0'
        style={{
            backgroundImage : "url('/doodle.jpg')",
            backgroundSize : "cover",
            backgroundPosition : "center"
        }}
        >
            <div className='w-full h-full bg-blue-50 opacity-96'></div>
        </div>
        <div className='relative z-10'>
        <div className='flex flex-col items-center text-center gap-8 max-w-3xl mx-auto'>
            <h1 className='text-3xl sm:text-5xl font-semibold text-[#ef6c00]'>Our Key Areas of Focus</h1>
            <h3 className='text-md sm:text-2xl font-medium text-[#ef6c00] '>Pharmaceutical Marketing</h3>
            <p className='text-gray-600 text-sm sm:text-base'>Strategic promotion of products to healthcare providers and consumers. Tailored campaigns, market analysis, and ethical practices to drive brand awareness and market penetration.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            {areas.map((item,index) => (
                <div key={index} className='flex flex-col items-center text-center p-6'>
                    <img src={item.pic} alt='image' className='w-16'/>
                    <h3 className="text-lg font-bold text-[#ef6c00] mb-2">{item.main}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed break-words">{item.desc}</p>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Focus;