import { FaGraduationCap, FaRobot, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa'; // Importing icons
import Image from "next/image";
import { assets } from "../assets/assets";

const IndustryLearningSection = () => {
  return (
    <section className="bg-gray-200 py-12 px-4 md:px-16 mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Industry-Tailored Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Side - 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-3">
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-start">
              <FaGraduationCap className="text-blue-500 mb-4 text-4xl" />
              <h3 className="text-xl font-semibold">Industry-Oriented Curriculum</h3>
              <p className="text-gray-600 text-sm mt-2">
                An updated curriculum engineered to teach you only what the industry demands.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-start">
              <FaRobot className="text-blue-500 mb-4 text-4xl" />
              <h3 className="text-xl font-semibold">AI-Driven Learning Products</h3>
              <p className="text-gray-600 text-sm mt-2">
                AI-based IDE with real-time support and help, AI-based mock interviews, evaluation systems.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-start">
              <FaChalkboardTeacher className="text-blue-500 mb-4 text-4xl" />
              <h3 className="text-xl font-semibold">Experienced Instructors</h3>
              <p className="text-gray-600 text-sm mt-2">
                Courses taught only by people who have already aced it! 1000+ tech professionals to guide you.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-start">
              <FaUserGraduate className="text-blue-500 mb-4 text-4xl" />
              <h3 className="text-xl font-semibold">1000+ Mock Interviews</h3>
              <p className="text-gray-600 text-sm mt-2">
                Practice your skills with unlimited mock interviews you can schedule yourself.
              </p>
            </div>
          </div>
          
          {/* Right Side - Image Card with Button */}
          <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-xl shadow-lg md:col-span-2">
            <Image src={assets.user_testimonial} alt="Testimonial" width={200} height={200} className="rounded-full" />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">Rohit Arora</h3>
              <p className="text-gray-600">Software Engineer | CTC: 18LPA</p>
              <p className="text-blue-500 font-semibold">Zepto</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryLearningSection;
