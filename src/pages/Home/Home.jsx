import { BsFillStarFill } from "react-icons/bs";
import Hero from "../../components/Hero/Hero";
import Instructors from "../../components/Instructors/Instructors";
import TopClasses from "../../components/TopClasses/TopClasses";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="divider">
        <BsFillStarFill />
      </div>
      <TopClasses />
      <div className="divider">
        <BsFillStarFill />
      </div>
      <Instructors />
      <div className="divider">
        <BsFillStarFill />
      </div>
      <ContactUs />
    </>
  );
};

export default Home;
