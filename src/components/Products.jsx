import React, { useState } from "react";
import { products } from "@/data";

// Sample ProductCard component
const ProductCard = ({ product, index, className = "" }) => {
  const [isTapped,setIsTapped] = useState(false);
  
  return (
    <div className={`${product.bgColor} rounded-2xl p-8 h-full ${className}`}>
      <div>
        <h3 className='text-2xl font-bold text-white mb-4'>{product.title}</h3>
        <p className='text-white/95 mb-5'>{product.description}</p>
        <div className='text-white/90 text-sm'>
          {product.details}
        </div>
      </div>
      <div className="mt-4 group"
      onTouchStart={() => setIsTapped(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsTapped(false),300);
      }}
      >
        <img 
          src={product.icon} 
          alt="image"
          className={`transition-transform duration-500
             ${product.imgSize}  mt-4
             ${isTapped ? "-rotate-60 scale-110" : ""}
            group-hover:-rotate-60 group-active:-rotate-60
            `}
        />
      </div>
    </div>
  )
}

// Sample products data


const Products = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-[#ef6c00] mb-4">
          Our Products
        </h1>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        
        <div className="lg:row-span-2">
          <ProductCard product={products[0]} index={0} />
        </div>
        
        
        <ProductCard product={products[1]} index={1} />
        <ProductCard product={products[2]} index={2} />
        <ProductCard product={products[3]} index={3} />
        <ProductCard product={products[4]} index={4} />
      </div>

      
      <div className="hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <ProductCard product={products[0]} index={0} />
          </div>
          <div className="lg:col-start-2 lg:row-start-1">
            <ProductCard product={products[1]} index={1} />
          </div>
          <div className="lg:col-start-3 lg:row-start-1">
            <ProductCard product={products[2]} index={2} />
          </div>
          <div className="lg:col-start-2 lg:row-start-2">
            <ProductCard product={products[3]} index={3} />
          </div>
          <div className="lg:col-start-3 lg:row-start-2">
            <ProductCard product={products[4]} index={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

