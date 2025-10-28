import React from 'react'

const Vision = () => {
  return (
    <section className='py-16 px-6 text-gray-700 bg-no-repeat bg-center bg-cover'
    style={{backgroundImage:"url('/bnw-2.avif')",
        
    }}
    >
        <div className='p-10 rounded-2xl maxm-w-5xl mx-auto space-y-10'>
            <div>
                <h2 className='text-2xl font-bold text-orange-600 mb-4'>Our Vision</h2>
                <p>We are committed to advancing global healthcare by making high-quality medicines accessible to all. Through continuous innovation, ethical practices, and unwavering dedication to customer satisfaction, Novelty LifeSciences aims to remain a beacon of trust and excellence in the pharmaceutical industry.</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold text-orange-600 mb-4'>Our Mission</h2>
                <p>Join us in our mission to shape a healthier tomorrow</p>
            </div>
            <div>
                <h1 className='text-3xl italic font- text-orange-400 text-center'>"NOVELTY LIFESCIENCES - WHERE QUALITY MEETS COMPASSION.?"</h1>
            </div>
        </div>
    </section>
  )
}

export default Vision;