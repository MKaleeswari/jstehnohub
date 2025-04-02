import Image from "next/image";
import { assets } from "../assets/assets"; // Update this with actual assets or paths

const OurOfferings = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Course 1: Data Science & AI */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Data Science & Artificial Intelligence</h3>
            <p className="text-gray-600 mb-2"><strong>Online Course</strong></p>
            <p className="text-gray-600 mb-2"><strong>Duration:</strong> 14 Months</p>
            <p className="text-gray-600 mb-2"><strong>New Batch Start:</strong> May 12, 2025</p>
            <p className="text-gray-600 mb-2"><strong>Scholarship Available:</strong> Yes</p>
            <p className="text-gray-600 mb-2"><strong>EMI starts from:</strong> Rs. 7,200</p>
            <p className="text-gray-600 mb-2"><strong>Eligibility:</strong> Open for All</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li>Get a professional certificate on completion of course</li>
              <li>Unlimited mock interviews for your interview practice</li>
              <li>Access to 10,000+ coding questions in our Arena</li>
              <li>100% Placement Assistance (Lifetime)</li>
              <li>No coding experience required</li>
            </ul>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
                Explore Course
              </button>
              <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400">
                Download Brochure
              </button>
            </div>
            <div className="mt-4 text-center">
              <Image src={assets.streakIcon} alt="Streak Icon" width={30} height={30} />
              <p className="mt-2 text-gray-500 text-sm">1,200+ Students already enrolled</p>
            </div>
          </div>

          {/* Course 2: Advanced Full Stack Development */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Advanced Full Stack Development</h3>
            <p className="text-gray-600 mb-2"><strong>Online Course</strong></p>
            <p className="text-gray-600 mb-2"><strong>Duration:</strong> 6-8 Months</p>
            <p className="text-gray-600 mb-2"><strong>New Batch Start:</strong> May 14, 2025</p>
            <p className="text-gray-600 mb-2"><strong>Scholarship Available:</strong> Yes</p>
            <p className="text-gray-600 mb-2"><strong>EMI starts from:</strong> Rs. 6,167</p>
            <p className="text-gray-600 mb-2"><strong>Eligibility:</strong> Open for All</p>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              <li>Get a professional certificate on completion of course</li>
              <li>Unlimited mock interviews for your interview practice</li>
              <li>Access to 10,000+ coding questions in our Arena</li>
              <li>100% Placement Assistance (Lifetime)</li>
              <li>No coding experience required</li>
            </ul>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
                Explore Course
              </button>
              <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400">
                Download Brochure
              </button>
            </div>
            <div className="mt-4 text-center">
              <Image src={assets.streakIcon} alt="Streak Icon" width={30} height={30} />
              <p className="mt-2 text-gray-500 text-sm">6,300+ Students already enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
