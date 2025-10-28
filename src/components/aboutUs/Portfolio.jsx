import { portfolio} from '@/data'
import React from 'react'

const Portfolio = () => {
  return (
    <section className='py-12 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-300 to-orange-300  min-h-screen'>
        <div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 w-full max-w-7xl mx-auto items-center'>
            <div className='w-full lg:w-1/2 space-y-6 '>
                <h2 className='font-medium text-3xl text-orange-500'>Diverse Portfolio for Holistic Care</h2>
                <p className='text-white/80 font-medium text-sm sm:text-base'>With approximately 200 products in our portfolio, we cater to a wide spectrum of therapeutic areas, including:</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {portfolio.map((item,index) => (
                        <div key={index} className='flex gap-4 sm:gap-6 items-start'>
                            <div className=''>
                            <img src={item.pic} alt="image" className={`${item.imgSize} object-contain flex-shrink-0`} />
                           
                            </div>
                            <div>
                             <h3 className='font-semibold text-lg sm:text-xl text-orange-600'>{item.title}</h3>
                            <p className='text-white/80 font-medium text-sm sm:text-base'>{item.description}</p>
                            </div>
                        </div>
                    ) )}
                </div>
                
                    <p className='text-white/80 text-sm sm:text-base'>Our offerings are manufactured in WHO-GMP compliant facilities, ensuring the highest levels of safety, efficacy, and consistency. From pioneering niche formulations to delivering established therapies, we prioritize innovation and accessibility.</p>
                
            </div>
            <div className='w-full lg:w-1/2'>
                <img src="/machinery.jpg" alt="pharma machinery" className='w-full h-auto object-cover rounded-xl shadow-lg' />
            </div>
        </div>
    </section>
  )
}

export default Portfolio