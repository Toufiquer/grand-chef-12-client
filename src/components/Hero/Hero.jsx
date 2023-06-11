/* eslint-disable react/prop-types */
import { Typewriter } from "react-simple-typewriter";
import { motion, useSpring } from "framer-motion";

const Hero = () => {
  const x = useSpring(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{ x }}
    >
      {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} /> */}
      <div className="hero min-h-screen TR-hero">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <span className="text-6xl font-thin  text-center mb-2">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Eat", "Sleep", "Code", "Repeat!"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
