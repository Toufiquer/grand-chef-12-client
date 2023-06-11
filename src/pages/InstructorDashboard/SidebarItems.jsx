import { Link } from "react-router-dom";

const SidebarItems = () => {
  return (
    <>
      <li>
        <Link to="/instructorDashboard/instructorAddClass">Add a Class</Link>
      </li>
      <li>
        <Link to="/instructorDashboard/instructorMyAllClass">My All Class</Link>
      </li>
      <li>
        <Link to="/instructorDashboard/instructorTotalEnrolledStudent">
          Total Enrolled Student
        </Link>
      </li>
      <li>
        <Link to="/instructorDashboard/instructorFeedBack">FeedBack</Link>
      </li>
    </>
  );
};

export default SidebarItems;
