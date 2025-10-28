import React from 'react'

const Intro = () => {
  return (
    <section className='relative w-full h-screen overflow-hidden'>
        <video className='absolute top-0 left-0 w-full h-full object-cover z-0'
        preload='none'
        autoPlay
        loop
        muted
        playsInline
        >
            <source src='/pharmavid.mp4' type="video/mp4"/>
            your browser doent support the video tag.
        </video>

        <div className='relative z-10 flex flex-col items-center justify-center h-full text-white/75 px-4 bg-black/50 '>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>About Us</h2>
            <p className='text-base md:text-xl max-w-3xl text-center'>
                Novelty LifeSCiences, established in 2019 (Hyderabad, India), manufactures niche oral products (tablets, capsules, syrups) via integrated facilities in Hyderabad,Mumbai and Himachal Pradesh, serving as a trusted partner for global pharma firms.
            </p>
        </div>
    </section>
  )
}

export default Intro