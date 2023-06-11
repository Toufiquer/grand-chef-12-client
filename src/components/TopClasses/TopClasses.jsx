import { useTransform, motion, useViewportScroll } from "framer-motion";
import SwipeSlider from "../SwipeSlider/SwipeSlider";
const TopClasses = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.8, 5]);
  return (
    <div className="my-6">
      <motion.div style={{ scale }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p>Provident cupiditate voluptatem et in.</p>
        </div>
      </motion.div>
      <SwipeSlider />
    </div>
  );
};

export default TopClasses;
