import { Link } from "react-router-dom";

const SidebarItems = () => {
  return (
    <>
      <li>
        <Link to="/adminDashboard/adminAddClass">Add a Class</Link>
      </li>
      <li>
        <Link to="/adminDashboard/adminMyAllClass">My All Class</Link>
      </li>
    </>
  );
};

export default SidebarItems;
