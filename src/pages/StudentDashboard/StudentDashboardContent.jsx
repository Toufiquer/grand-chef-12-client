import ClassesItem from "../../components/ClassesItem/ClassesItem";
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { useParams } from "react-router-dom";

// This will  only show in index
// if hit ..studentDashboard/:id => render DashboardContent
const StudentDashboardContent = () => {
  const { id } = useParams();
  return (
    <div>
      <ClassesItem />
    </div>
  );
};

export default StudentDashboardContent;
