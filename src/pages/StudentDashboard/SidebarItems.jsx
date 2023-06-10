import { Link } from "react-router-dom";

const SidebarItems = () => {
  return (
    <>
      <li>
        <Link to="/studentDashboard/1">My Selected Class</Link>
      </li>
      <li>
        <Link to="/studentDashboard/2">Trash</Link>
      </li>
      <li>
        <Link to="/studentDashboard/3">Payment History</Link>
      </li>
      <li>
        <Link to="/studentDashboard/4">My Enrolled Classes</Link>
      </li>
    </>
  );
};

export default SidebarItems;
