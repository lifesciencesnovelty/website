import React from "react";

const BrochureSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Discover Our Product Range
        </h2>
      {/*}  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Learn more about Novelty LifeSciences’ wide range of pharmaceutical solutions,
          quality standards, and commitment to innovation. Download our brochure to
          explore our product lineup and services in detail.
        </p>

        */}

        <a
          href="/brochure.pdf" // 👈 your brochure file in /public
          download="Novelty_LifeSciences_Brochure.pdf"
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
        >
          📄 Download Brochure
        </a>
      </div>
    </section>
  );
};

export default BrochureSection;
