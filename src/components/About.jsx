import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:h-screen flex flex-col lg:flex-row justify-center gap-6 items-center lg:gap-16 px-4 sm:px-8 lg:px-12 xl:px-10 py-6 lg:py-8 overflow-hidden max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-start gap-4 lg:gap-5"
      >
        <h1 className="text-4xl font-bold text-[#ef6c00]">About Us</h1>
        <h3 className="text-2xl font-medium">
          Established in the year 2019, Novelty Lifesciences has attained a top
          reputation in India’s pharmaceutical market for manufacturing and
          trading a quality-assured range of Pharmaceutical Medicines.
        </h3>
        <p className="text-gray-600">
          We take pride in facilitating a wide range of Tablets, Capsules, Soft
          gel, hormone Tablets, Clav (Beta), Dry Syrups, Ointments, Creams,
          Syrups, Navoshot, Sachet, Protein Powder, NRX, Neuro Range, Gargles,
          Injectables. All these products are processed under the strict
          guideline of international standards, following the rules of
          appropriate composition of compounds.
        </p>
        <button onClick={() => navigate("/about")} className="bg-[#ef6c00] text-white px-6 py-3 rounded-md shadow hover:bg-orange-700 transition duration-300 text-sm sm:text-base font-medium mt-2">
          Read More !
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-lg lg:max-w-xl flex justify-center"
      >
        <img
          src="/d6.png"
          alt="doctor"
          className="w-full h-auto max-h-[900px] sm:max-h-[600px] lg:max-h-[800px] xl:max-h-[800px] object-cover"
        />
      </motion.div>
    </div>
  );
};

export default About;
