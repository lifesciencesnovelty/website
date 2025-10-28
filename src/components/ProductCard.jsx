import React, { useState } from 'react'


const ProductCard = ({product,index,className=""}) => {
  return (
   
    <div
    className={`${product.bgColor} rounded-2xl p-8 h-full ${className}`}
    >
        <div>
            <div>
                <h3 className='text-2xl font-bold text-white mb-4'>{product.title}</h3>
                <p className='text-white/95 mb-5'>{product.description}</p>
                <div className='text-white/90 text-sm'>
                    {product.details}
                </div>
            </div>

            <div>
                <img src={product.icon} alt="image" 
                className='transition-transform duration-300 hover:-rotate-60 active:-rotate-60 motion-safe:animate-spin-slow'
                />
            </div>
        </div>
    </div>
    
  )
}

export default ProductCard

