import React from 'react'

const Quality = () => {
  return (
    <section className='relative py-12 px-4 sm:px-6 md:px-8 overflow-hidden'>
        <div
        className='absolute  inset-0 bg-cover bg-center opacity-20 z-0'
        style={{backgroundImage:"url('/pharmacist.jpg')"}}
        ></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
        <div className='flex-1'>
            <h2 className='text-2xl sm:text-3xl font-bold text-orange-600 mb-6'>Commitment to Quality and Compliance</h2>
            <p className='text-sm sm:text-base text-gray-700'>Quality is the cornerstone of our operations. Our integrated manufacturing units are equipped with advanced technology and undergo rigorous audits to meet international regulatory standards. Our team of seasoned professionals—including pharmacists, scientists, and quality assurance experts—leverages decades of industry experience to uphold excellence at every stage, from R&D to delivery.</p>
        </div>
        <div className='flex-1 w-full'>
            <img src="/pharmacist.jpg" alt="pharmacist" className='w-full h-auto rounded-xl shadow-lg object-cover max-h-[400px]'/>
        </div>
        </div>
    </section>
  )
}

export default Quality