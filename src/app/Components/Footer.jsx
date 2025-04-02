import { assets } from "../assets/assets"; // Update the assets path as needed
import Image from "next/image";

const Footer = () => {
  return (
    <>
     <section className="bg-yellow-100 py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex items-center space-x-8">
        {/* Left Side - Text and Button */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Join Our Courses and Start Your Tech Journey</h2>
          <p className="text-lg text-gray-700 mb-4">
            Get ready to dive into the tech world with our industry-oriented courses. Unlock new opportunities and enhance your skills with the latest technologies.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Explore Courses</button>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <Image src={assets.someImage} alt="Course Image" width={400} height={250} className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
    
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        {/* Logo and Description Section */}
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo1} alt="logo" />
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links Section */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@company.dev</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © company.dev All Right Reserved.
      </p>
    </footer>
    </>
  );
};

export default Footer;
