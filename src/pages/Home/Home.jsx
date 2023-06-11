import Hero from "../../components/Hero/Hero";
import Instructors from "../../components/Instructors/Instructors";
import TopClasses from "../../components/TopClasses/TopClasses";
import ContactUs from "../../components/ContactUs/ContactUs";
import Divider from "../../components/Divider/Divider";
const Home = () => {
  
  return (
    <>
      <Hero />
      <Divider /> {/** Divider */}
      <TopClasses />
      <Divider /> {/** Divider */}
      <Instructors />
      <Divider /> {/** Divider */}
      <ContactUs />
    </>
  );
};

export default Home;
