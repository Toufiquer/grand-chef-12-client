/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ user }) => {
  const [userRole, setUserRole] = useState({});
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setUserRole(data.result));
    }
  }, [user]);
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructor">Instructor</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
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
