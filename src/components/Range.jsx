import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Range = () => {
    const [activeIndex,setActiveIndex] = useState(null);
    const navigate  = useNavigate();

    const products = [
        {
            img : "/tablet.jpg",
            main : "Tablet",
            desc : "We manufacture beta lactum tablets at an affordable price. Get in touch now.",
        },
        {
            img : "/capsule.jpg",
            main : "Capsules",
            desc : "Novelty Lifesciences is a leading contract manufacturing service provider for Capsules range.",
        },
        {
            img : "/syrup.avif",
            main : "Syrups",
            desc : "We are providing syrups & suspension manufacturing service at the best price.",
        },
        {
            img : "/injectables.jpg",
            main : "Injectables",
            desc : "Novelty Lifesciences is a trusted name indulged in manufacturing for injectables range.",
        },
    ]
  return (
    <div className='flex flex-col items-center min-h-screen justify-center gap-8 md:gap-16 px-4 py-10'>
        <div className='flex flex-col gap-2 items-center text-center'>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Range Wise Products</h3>
            <p className='font-medium text-sm md:text-base text-gray-700 px-4'>Our Premium Quality Pharmaceutical Products for a Healthy World</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl w-full'>
    {products.map((item,index) => {
        const isActive = activeIndex === index;
    return(
        <div key={index} className='flex flex-col gap-4 items-center text-center'>
            <button 
            onClick={() => {
            setActiveIndex(index);
            navigate("/product");}}
            className={`
                w-48 h-48 sm:w-56 sm:h-56 md:w-48 md:h-48
                rounded-full border-4 transition-all duration-300 transform 
                ${isActive
                    ? 'border-[5px] border-[#ef6c00] scale-110'
                    : 'border-[10px] border-[#d3e7f2] scale-100'
                } hover:border-[5px] hover:border-[#ef6c00] hover:scale-105
                `}
            >
                <img src={item.img} alt={item.main} className='w-full h-full rounded-full object-cover transition-transform duration-300 '/>
            </button>
            <div className='text-xl md:text-2xl lg:text-3xl font-medium'>
                {item.main}
            </div>
            <div className='text-sm sm:text-sm md:text-base text-gray-800'>
                {item.desc}
            </div>
        </div>
    )
})

    }
        </div>
    </div>
  )
}

export default Range


