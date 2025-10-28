import BrochureSection from '@/components/BrochureSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Imp from '@/components/product/Imp'
import ProductsPage from '@/components/ProductsPage'
import React from 'react'

const Product = () => {
  return (
    <div>
        <Navbar/>
         
        <Imp/>
        <ProductsPage/>
        <BrochureSection/>
        <Footer/>
    </div>
  )
}

export default Product