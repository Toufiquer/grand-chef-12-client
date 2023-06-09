import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import { useParams } from "react-router-dom";

const AdminDashboardContent = () => {
  const { id } = useParams();
  return (
    <div>
        
      <DisplayCenter>{id}</DisplayCenter>
    </div>
  );
};

export default AdminDashboardContent;
