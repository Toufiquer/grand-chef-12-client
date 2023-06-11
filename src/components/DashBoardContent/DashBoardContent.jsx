import { useParams } from "react-router-dom";
import AdminAddClass from "../../pages/adminDashboard/AdminAddClass";
import AdminMyAllClass from "../../pages/adminDashboard/AdminMyAllClass";
import StudentMySelectedClass from "../../pages/StudentDashboard/StudentMySelectedClass";
import StudentTrash from "../../pages/StudentDashboard/StudentTrash";
import StudentPaymentHistory from "../../pages/StudentDashboard/StudentPaymentHistory";

const DashBoardContent = () => {
  const { id } = useParams();
  return (
    <>
      {/* For Admin Section */}
      {id === "adminAddClass" && <AdminAddClass />}
      {id === "adminMyAllClass" && <AdminMyAllClass />}
      {/* For Student Section */}
      {id === "studentMySelectedClass" && <StudentMySelectedClass />}
      {id === "studentTrash" && <StudentTrash />}
      {id === "studentPaymentHistory" && <StudentPaymentHistory />}
      {id === "studentMyEnrolledClasses" && <StudentMySelectedClass />}
      {id === "" && <StudentMySelectedClass />}
    </>
  );
};

export default DashBoardContent;
