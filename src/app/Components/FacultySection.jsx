"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick"; // Carousel library
import { assets } from "../assets/assets"; // Add your assets path here

const FacultySection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Introducing the Faculty</h2>
        <p className="text-lg mb-12 text-gray-600">
          Learn from the best! Our faculty bridges the gap between industry and academia, giving you the best of both worlds.
        </p>

        {/* Carousel Section */}
        <Slider {...settings}>
          {/* Faculty Card 1 */}
          <div className="text-center p-4 bg-gray-100 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-xl space-y-4">
            <Image
              src={assets.anantMittalImage} // Replace with actual image path
              alt="Anant Mittal"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Anant Mittal</h3>
            <p className="text-gray-600">Director of Academics</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src={assets.linkedinLogo} alt="LinkedIn" width={24} height={24} className="mx-auto mt-2" />
            </a>
            <Image src={assets.newtonSchoolLogo} alt="Newton School" width={80} height={20} className="mx-auto mt-2" />
          </div>

          {/* Faculty Card 2 */}
          <div className="text-center p-4 bg-gray-100 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-xl space-y-4">
            <Image
              src={assets.gladdenRumaoImage} // Replace with actual image path
              alt="Gladden Rumao"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Gladden Rumao</h3>
            <p className="text-gray-600">Technical Instructor and SDE</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src={assets.linkedinLogo} alt="LinkedIn" width={24} height={24} className="mx-auto mt-2" />
            </a>
            <Image src={assets.companyLogo} alt="Company Logo" width={80} height={20} className="mx-auto mt-2" />
          </div>

          {/* Faculty Card 3 */}
          <div className="text-center p-4 bg-gray-100 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-xl space-y-4">
            <Image
              src={assets.vishalSharmaImage} // Replace with actual image path
              alt="Vishal Sharma"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Vishal Sharma</h3>
            <p className="text-gray-600">Software Engineer-2</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src={assets.linkedinLogo} alt="LinkedIn" width={24} height={24} className="mx-auto mt-2" />
            </a>
            <Image src={assets.companyLogo} alt="Company Logo" width={80} height={20} className="mx-auto mt-2" />
          </div>

          {/* Faculty Card 4 */}
          <div className="text-center p-4 bg-gray-100 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-xl space-y-4">
            <Image
              src={assets.bhaveshBansalImage} // Replace with actual image path
              alt="Bhavesh Bansal"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Bhavesh Bansal</h3>
            <p className="text-gray-600">Senior Software Engineer</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src={assets.linkedinLogo} alt="LinkedIn" width={24} height={24} className="mx-auto mt-2" />
            </a>
            <Image src={assets.companyLogo} alt="Company Logo" width={80} height={20} className="mx-auto mt-2" />
          </div>

          {/* Faculty Card 5 */}
          <div className="text-center p-4 bg-gray-100 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-xl space-y-4">
            <Image
              src={assets.rahulJaiswalImage} // Replace with actual image path
              alt="Rahul Jaiswal"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Rahul Jaiswal</h3>
            <p className="text-gray-600">Full Stack (MERN) Trainer</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src={assets.linkedinLogo} alt="LinkedIn" width={24} height={24} className="mx-auto mt-2" />
            </a>
            <Image src={assets.companyLogo} alt="Company Logo" width={80} height={20} className="mx-auto mt-2" />
          </div>

          {/* Faculty Card 6 */}
          <div className="text-center p-4 bg-gray-100 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-xl space-y-4">
            <Image
              src={assets.rohitAroraImage} // Replace with actual image path
              alt="Rohit Arora"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Rohit Arora</h3>
            <p className="text-gray-600">Senior Software Developer</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src={assets.linkedinLogo} alt="LinkedIn" width={24} height={24} className="mx-auto mt-2" />
            </a>
            <Image src={assets.companyLogo} alt="Company Logo" width={80} height={20} className="mx-auto mt-2" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default FacultySection;
