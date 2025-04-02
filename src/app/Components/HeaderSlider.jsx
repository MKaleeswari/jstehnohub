"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const HeaderSlider = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <>
   <section className="relative flex flex-col lg:flex-row h-auto min-h-screen bg-black pb-20">

        {/* Left Side (Text Section) */}
        <div className="bg-black text-white flex flex-col justify-center px-6 sm:px-10 md:px-14 mt-4 lg:px-20 w-full lg:w-1/2 py-10 md:py-16">
          <h3 className="text-lg text-orange-500 mt-4">LEARN WHAT THE INDUSTRY DEMANDS</h3>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Unlock Your Dream <span className="text-blue-500">Tech Job</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 mt-4">
            AI-driven, industry-focused courses in software development and data science to secure your dream tech job.
          </p>

          {/* Sign Up Button */}
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-base w-40 md:w-52">
            Sign up
          </button>

          <p className="mt-4 text-sm text-gray-400">🔥 15K+ Students already enrolled</p>
        </div>

        {/* Right Side (Form Section) */}
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-black p-6 sm:p-8">
          <div className="w-full max-w-sm md:max-w-md bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 text-center mb-4">
              Book a Live Class, For Free!
            </h2>

            {/* Google Signup Button */}
            <div className="flex justify-center mb-4">
              <button className="flex items-center justify-center border py-2 px-4 rounded-md shadow-md text-gray-700 hover:bg-gray-100 w-full max-w-xs">
                <Image src={assets.google_icon} alt="Google Icon" width={20} height={20} />
                <span className="ml-2">Sign up with Google</span>
              </button>
            </div>

            <div className="text-center my-3 text-gray-500">OR</div>

            <form>
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                />
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  placeholder="Enter phone number"
                  id="phone"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="w-full border p-3 rounded-md focus:outline-none mt-2 custom-phone-input"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderSlider;
