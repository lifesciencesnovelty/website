{/*

import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ target, label, startDelay = 0, trigger }) => {
  const countDivRef = useRef(null);
  const rafRef = useRef(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    if (!trigger || animatingRef.current) return;

    animatingRef.current = true;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const animationDuration = 2000;
    let startTime = null;

    const timeout = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeProgress * target);

        if (countDivRef.current) {
          countDivRef.current.textContent = currentCount + '+';
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          if (countDivRef.current) {
            countDivRef.current.textContent = target + '+';
          }
          animatingRef.current = false;
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [trigger, target, startDelay]);

  return (
    <div className="text-center text-white">
      <div ref={countDivRef} className="text-3xl md:text-5xl font-bold tabular-nums">
        0+
      </div>
      <div className="text-sm md:text-base mt-1">{label}</div>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { target: 7, label: 'Years of Experience' },
    { target: 3, label: 'Divisions' },
    { target: 1000, label: 'Happy Clients' },
  ];

  const [inView, setInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (isDesktop) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center py-16 sm:py-20 md:py-32"
      style={{
        backgroundImage: "url('/pharmacist.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: isDesktop ? 'fixed' : 'scroll',
      }}
    >
      <div className="absolute inset-0 bg-red-700 opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center text-white">
              {isDesktop ? (
                <>
                  <div className="text-3xl md:text-5xl font-bold tabular-nums">
                    {stat.target}+
                  </div>
                  <div className="text-sm md:text-base mt-1">{stat.label}</div>
                </>
              ) : (
                <Counter
                  target={stat.target}
                  label={stat.label}
                  startDelay={i * 200}
                  trigger={inView}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  */}

import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ target, label, startDelay = 0, trigger }) => {
  const countDivRef = useRef(null);
  const rafRef = useRef(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    if (!trigger || animatingRef.current) return;

    animatingRef.current = true;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const animationDuration = 2000;
    let startTime = null;

    const timeout = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeProgress * target);

        if (countDivRef.current) {
          countDivRef.current.textContent = currentCount + '+';
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          if (countDivRef.current) {
            countDivRef.current.textContent = target + '+';
          }
          animatingRef.current = false;
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [trigger, target, startDelay]);

  return (
    <div className="text-center text-white">
      <div ref={countDivRef} className="text-3xl md:text-5xl font-bold tabular-nums">
        0+
      </div>
      <div className="text-sm md:text-base mt-1">{label}</div>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { target: 7, label: 'Years of Experience' },
    { target: 2, label: 'Divisions' },
    { target: 1000, label: 'Happy Clients' },
  ];

  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="parallax-section relative bg-cover bg-center py-16 sm:py-20 md:py-32"
        style={{
          backgroundImage: "url('/pharmacist.jpg')",
          minHeight: '400px'
        }}
      >
        <div className="absolute inset-0 bg-red-700 opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="block md:hidden">
                <Counter
                  target={stat.target}
                  label={stat.label}
                  startDelay={i * 200}
                  trigger={inView}
                />
              </div>
            ))}
            {stats.map((stat) => (
              <div key={`desktop-${stat.label}`} className="text-center text-white hidden md:block">
                <div className="text-3xl md:text-5xl font-bold tabular-nums">
                  {stat.target}+
                </div>
                <div className="text-sm md:text-base mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        /* Base styles */
        .parallax-section {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        
        /* Mobile: NO parallax - smooth scroll */
        @media only screen and (max-width: 767px) {
          .parallax-section {
            background-attachment: scroll !important;
          }
        }
        
        /* Desktop: Fixed parallax effect */
        @media only screen and (min-width: 768px) {
          .parallax-section {
            background-attachment: fixed !important;
          }
        }
        
        /* Disable parallax on low-power devices */
        @media only screen and (max-device-width: 1366px) {
          .parallax-section {
            background-attachment: scroll !important;
          }
        }
      `}} />
    </>
  );
}