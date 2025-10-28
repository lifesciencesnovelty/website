import React from "react";
import { assurance } from "../data";
import {
  BuildingLibraryIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const iconMap = [
  <BuildingLibraryIcon className="h-24 w-20 text-[#406ce0]" />,
  <TrophyIcon className="h-24 w-20 text-[#406ce0]" />,
  <ShieldCheckIcon className="h-24 w-20 text-[#406ce0]" />,
  <UserIcon className="h-24 w-20 text-[#406ce0]" />,
];

const Positives = () => {
  return (
    <div className="relative w-full">

    <div className="absolute inset-0  w-full h-full bg-cover bg-center"
    style={{backgroundImage : "url('/doodle2.jpg')"}}
    >
      <div className="w-full h-full bg-orange-50 opacity-93"></div>
    </div>
    
    <div className="relative z-10 px-4 sm:px-6 py-16 flex flex-col lg:flex-row items-center gap-12" >
        
      <div className="flex-1 w-full">
        <div className="text-start max-w-3xl mx-auto mb-12">
          <p className="text-[#ef6c00] text-lg font-semibold mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What makes us better than other contract Manufacturer ?
          </h2>
          <p className="text-gray-700">
            On the other hand we denounce with righteous indignation
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {assurance.map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="flex-shrink-0">
                {item.pic ? <img src={item.pic} alt={"alt"}/> : iconMap[index]}
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-bold text-black mb-2">
                  {item.main}
                </h2>
                <p className="text-gray-600 text-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <img src="/d2.png" alt="doctor" className="max-w-xs sm:max-w-md md:max-w-sm w-full h-auto object-contain" />
      </div>
    </div>
    </div>
  );
};

export default Positives;
