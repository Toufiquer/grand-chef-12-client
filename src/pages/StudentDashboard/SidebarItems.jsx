import { Link } from "react-router-dom";

const SidebarItems = () => {
  return (
    <>
      <li>
        <Link to="/studentDashboard/studentMySelectedClass">
          My Selected Class
        </Link>
      </li>
      <li>
        <Link to="/studentDashboard/studentTrash">Trash</Link>
      </li>
      <li>
        <Link to="/studentDashboard/studentPaymentHistory">
          Payment History
        </Link>
      </li>
      <li>
        <Link to="/studentDashboard/studentMyEnrolledClasses">
          My Enrolled Classes
        </Link>
      </li>
    </>
  );
};

export default SidebarItems;
