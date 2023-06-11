import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { useParams } from "react-router-dom";
const ClassesInstructor = () => {
  const { id } = useParams();
  return (
    <div>
      <DisplayCenter>Class with instructor : {id}</DisplayCenter>
    </div>
  );
};

export default ClassesInstructor;
