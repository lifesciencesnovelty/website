import React from 'react';

const Imp = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-4 py-12 md:px-16 gap-12 bg-white">
      
      {/* Left - Image */}
      <div className="md:w-1/2">
        <img
          src="/qvel10.jpg"
          alt="Q-VEL 10 Tablets"
          className="w-72 sm:w-80 md:w-96 lg:w-[108rem] object-contain rounded shadow-md"
        />
      </div>
      {/* Right - Text */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold text-orange-600 mb-2">Q-VEL 10</h2>
        <h3 className="text-xl font-semibold mb-4">
Coenzyme-Q10 L-Carnitine, L-Arginine, Lycopene, Glutathionine, Astaxanthin, Omega 3 Fatty Acid with Multivitamin & Multimineral Tablets        </h3>
         <p className="mb-4">
          QVEL-10 is a powerful combination of antioxidants, amino acids, essential fatty acids, and micronutrients designed to support cardiovascular, reproductive, and overall cellular health.
        </p>

        
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Cardiovascular health</strong>, improving energy production in heart cells (via Coenzyme Q10 and L-Carnitine)</li>
          <li><strong>Male fertility and stamina</strong>, enhancing nitric oxide production and sperm motility (via L-Arginine)</li>
          <li><strong>Antioxidant protection</strong>, helping fight oxidative stress and cellular aging (from Lycopene, Glutathione, and Astaxanthin)</li>
          <li><strong>Eye and skin health</strong>, with Astaxanthin and Omega-3s offering anti-inflammatory benefits</li>
          <li><strong>Brain and cognitive function</strong>, supported by Omega-3 Fatty Acids</li>
          <li><strong>Overall vitality and immunity</strong>, via essential Multivitamins and Multiminerals</li>
        </ul>
      </div>
    </section>
  );
};

export default Imp;
