import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { useParams } from "react-router-dom";

const StudentDashboardContent = () => {
  const { id } = useParams();
  return (
    <div>
        
      <DisplayCenter>{id}</DisplayCenter>
    </div>
  );
};

export default StudentDashboardContent;
