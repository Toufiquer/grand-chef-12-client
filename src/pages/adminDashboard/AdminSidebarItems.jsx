import { Link } from "react-router-dom";

const AdminSidebarItems = () => {
  return (
    <>
      <li>
        <Link to="/adminDashboard/adminManageUsers">Manage Users</Link>
      </li>
      <li>
        <Link to="/adminDashboard/adminInstructorAllClasses">
          Instructor Classes
        </Link>
      </li>
      <li>
        <Link to="/adminDashboard/adminAddClass">
          Add a Class
          <sub>
            <small>For Instructor</small>
          </sub>
        </Link>
      </li>
      <li>
        <Link to="/adminDashboard/adminMyAllClass">
          My All Class
          <sub>
            <small>For Instructor</small>
          </sub>
        </Link>
      </li>
      <li>
        <Link to="/adminDashboard/adminTotalEnrolledStudent">
          Total Enrolled Student
        </Link>
      </li>
      <li>
        <Link to="/adminDashboard/adminTotalEnrolledInstructor">
          Total Enrolled Instructor
        </Link>
      </li>
      <li>
        <Link to="/adminDashboard/adminFeedBack">Feedback</Link>
      </li>
    </>
  );
};

export default AdminSidebarItems;
