import { Link } from "react-router-dom";

const SidebarItems = () => {
  return (
    <>
      <li>
        <Link to="/studentDashboard/1">Sidebar Item 1</Link>
      </li>
      <li>
        <Link to="/studentDashboard/2">Sidebar Item 2</Link>
      </li>
      <li>
        <Link to="/studentDashboard/3">Sidebar Item 3</Link>
      </li>
      <li>
        <Link to="/studentDashboard/4">Sidebar Item 4</Link>
      </li>
      <li>
        <Link to="/studentDashboard/5">Sidebar Item 5</Link>
      </li>
    </>
  );
};

export default SidebarItems;
