import { useTransform, motion, useViewportScroll } from "framer-motion";
import SwipeSlider from "../SwipeSlider/SwipeSlider";
import { useGetClassesQuery } from "../../redux/features/classes/classesApi";
const TopClasses = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.1, 1], [0.8, 5]);
  const { isError, error, isLoading, data } = useGetClassesQuery();
  return (
    <div className="my-6">
      <motion.div style={{ scale }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Top Classes</h1>
          <p>Provident Top Class Video.</p>
        </div>
      </motion.div>
      <SwipeSlider
        isError={isError}
        error={error}
        isLoading={isLoading}
        data={data}
      />
    </div>
  );
};

export default TopClasses;
