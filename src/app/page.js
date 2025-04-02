import Navbar from "./Components/Navbar";
import HeaderSlider from "./Components/HeaderSlider";
import HiringSection from "./Components/HiringSection";
import IndustryLearningSection from "./Components/IndustryLearning";
import OurOfferings from "./Components/OurOffers";
import FacultySection from "./Components/FacultySection";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
   
        <HeaderSlider />
        <HiringSection/>
        <IndustryLearningSection/>
        <OurOfferings/>
        <FacultySection/>
        <Footer/>
       
        </>
  );
}
