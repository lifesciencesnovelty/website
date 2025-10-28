import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PharmaHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const slides = [
    {
      image: '/hero4.jpg',
      preHeadline: 'Welcome to',
      headline: 'Novelty Lifesciences',
      subtext: 'Your trusted partner in pharmaceutical excellence and innovative healthcare solutions',
      cta: 'Contact Us'
    },
    {
      image: '/hero3.jpg',
      headline: 'Innovating Healthcare Solutions',
      subtext: 'Advancing medical research and delivering quality pharmaceutical products for a healthier tomorrow',
      cta: 'Explore Our Products'
    },
    {
      image: '/hero1.jpg',
      headline: 'Committed to Quality & Safety',
      subtext: 'State-of-the-art manufacturing facilities ensuring the highest standards in pharmaceutical excellence',
      cta: 'Our Manufacturing'
    },
    {
      image: '/hero2.jpg',
      headline: 'Trusted by Healthcare Professionals',
      subtext: 'Partnering with medical experts worldwide to provide reliable therapeutic solutions',
      cta: 'Learn More'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(true);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(true);
      }, 300);
    }
  };

  const nextSlide = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(true);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(true);
    }, 300);
  };

  const navigate = useNavigate();

const handleCTA = (ctaText) => {

  if (!ctaText) return;

  const text = ctaText.toLowerCase().trim();
  

  if (text.includes("contact")) {
    
    navigate("/contact");
  } else if (text.includes("manufactur")) {
    
    navigate("/product");
  } else if (text.includes("product")) {
    
    navigate("/product");
  } else if (text.includes("learn")) {
    
    navigate("/about");
  } else {
    
    navigate("/");
  }
};



  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100 z-[5]' : 'opacity-0 scale-110 z-0 pointer-events-none'
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-4xl">
                {slide.preHeadline && (
                  <div className={`mb-4 transition-all duration-1000 ${
                    isAnimating && index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: '200ms' }}>
                    <p className="text-2xl md:text-3xl text-orange-400 font-light tracking-wide">
                      {slide.preHeadline}
                    </p>
                  </div>
                )}

                <h1 className={`font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
                  isAnimating && index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-12'
                } ${
                  slide.preHeadline 
                    ? 'text-6xl md:text-8xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent'
                    : 'text-5xl md:text-7xl'
                }`}
                style={{ transitionDelay: slide.preHeadline ? '400ms' : '200ms' }}>
                  {slide.headline}
                </h1>

                <p className={`text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed transition-all duration-1000 ${
                  isAnimating && index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: slide.preHeadline ? '600ms' : '400ms' }}>
                  {slide.subtext}
                </p>

                <div className={`transition-all duration-1000 ${
                  isAnimating && index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: slide.preHeadline ? '800ms' : '600ms' }}>
                  <button onClick={() => handleCTA(slide.cta)} className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50">
                    {slide.cta}
                    

                  </button>
                </div>

                <div className={`mt-12 transition-all duration-1000 ${
                  isAnimating && index === currentSlide
                    ? 'opacity-100 w-32'
                    : 'opacity-0 w-0'
                }`}
                style={{ transitionDelay: '1000ms' }}>
                  <div className="h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
  onClick={prevSlide}
  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2
             bg-transparent border border-white/30
             hover:bg-white/10 hover:border-white/50
             text-white p-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]
             transition-all duration-300 z-10 group"
>
  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
</button>



      <button
  onClick={nextSlide}
  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2
             bg-transparent border border-white/30
             hover:bg-white/10 hover:border-white/50
             text-white p-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]
             transition-all duration-300 z-10 group"
>
  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
</button>


    
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-red-600'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <div className="absolute top-6 md:top-8 right-4 md:right-8 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full font-semibold z-10 border border-white/20">
        <span className="text-orange-400">{currentSlide + 1}</span> / {slides.length}
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
}