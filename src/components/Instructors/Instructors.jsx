import { useGetInstructorsQuery } from "../../redux/features/instructor/instructorApi";
import SwipeSlider from "../SwipeSlider/SwipeSlider";
const Instructors = () => {
  const { isError, error, isLoading, data } = useGetInstructorsQuery();
  return (
    <div className="my-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Top Instructor</h1>
        <p className="mt-2">We Provident World Class Instructor.</p>
      </div>
      <SwipeSlider
        isError={isError}
        error={error}
        isLoading={isLoading}
        data={data}
      />
    </div>
  );
};

export default Instructors;
