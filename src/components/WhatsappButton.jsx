import React from "react";

const WhatsappButton = () => {
  const phoneNumber = "917837836626";
  const message = encodeURIComponent("Hello Novelty Lifesciences, I’d like to know more about your products.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
      </a>
      <span className="absolute bottom-16 right-1/2 translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </div>
  );
};

export default WhatsappButton;
