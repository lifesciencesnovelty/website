import React, { useEffect, useRef, useState } from "react";

const Counter = ({ target, label, startDelay = 0, trigger }) => {
  const countDivRef = useRef(null);
  const rafRef = useRef(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    if (!trigger || animatingRef.current) return;

    animatingRef.current = true;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

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
          countDivRef.current.textContent = currentCount + "+";
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          if (countDivRef.current) countDivRef.current.textContent = target + "+";
          animatingRef.current = false;
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, target, startDelay]);

  return (
    <div className="text-center text-white">
      <div
        ref={countDivRef}
        className="text-3xl md:text-5xl font-bold tabular-nums"
      >
        0+
      </div>
      <div className="text-sm md:text-base mt-1">{label}</div>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { target: 7, label: "Years of Experience" },
    { target: 3, label: "Divisions" },
    { target: 1000, label: "Happy Clients" },
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
      { threshold: 0.3, rootMargin: "50px" }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center py-16 sm:py-20 md:py-32"
      style={{
        backgroundImage: "url('/pharmacist.jpg')",
        backgroundAttachment: "scroll", // ✅ no parallax
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "400px",
      }}
    >
      <div className="absolute inset-0 bg-red-700 opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <Counter
              key={stat.label}
              target={stat.target}
              label={stat.label}
              startDelay={i * 200}
              trigger={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
