import React from "react";
import Image from "next/image";
import { companyLogos } from "../assets/assets";

const HiringSection = () => {
  return (
    <section className="relative bg-white pt-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Overlapping Statistic Cards */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 p-6 md:p-8 rounded-xl shadow-lg w-[90%] max-w-5xl z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { number: "800+", text: "Companies Hiring" },
              { number: "4,500+", text: "Students Placed" },
              { number: "50 LPA", text: "Highest Package" },
              { number: "1,200+", text: "Industry Experts" },
              { number: "350%", text: "Highest Salary Hike" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-semibold">{item.number}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Companies Section */}
        <h2 className="text-xl font-semibold mt-10 text-start">
          Get offers from <span className="text-blue-600">800+</span> top companies
        </h2>

        <div className="relative mt-4 overflow-hidden whitespace-nowrap mx-auto max-w-6xl marqueeContainer">
      <div className="marqueeContent">
        {companyLogos.concat(companyLogos).map((company, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={company.image}
              alt={`${company.name} logo`}
              width={90}
              height={35}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
};

export default HiringSection;
