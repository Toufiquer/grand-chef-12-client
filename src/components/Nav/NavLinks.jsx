import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const [userRole, setUserRole] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/users/toufiquerabc@gmail.com")
      .then((res) => res.json())
      .then((data) => setUserRole(data.result));
  }, []);
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      <li>
        <NavLink to="/logIn">Log In</NavLink>
      </li>
      {userRole.role === "admin" && (
        <li>
          <NavLink to="/adminDashboard">Dashboard </NavLink>
        </li>
      )}
      {userRole.role === "student" && (
        <li>
          <NavLink to="/studentDashboard">Dashboard </NavLink>
        </li>
      )}
    </>
  );
};

export default NavLinks;
