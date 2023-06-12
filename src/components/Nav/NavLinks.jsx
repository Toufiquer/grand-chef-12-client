/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetUserQuery } from "../../redux/features/users/usersApi";

const NavLinks = ({ user }) => {
  const [invoke, setInvoke] = useState(true);
  const { data } = useGetUserQuery(user?.email, { skip: invoke });
  console.log(data, user);
  useEffect(() => {
    if (user?.email) {
      setInvoke(false);
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
      {/* Conditional Route */}
      {data?.role === "admin" && (
        <li>
          <NavLink to="/adminDashboard">Dashboard </NavLink>
        </li>
      )}
      {data?.role === "student" && (
        <li>
          <NavLink to="/studentDashboard">Dashboard </NavLink>
        </li>
      )}
      {data?.role === "instructor" && (
        <li>
          <NavLink to="/instructorDashboard">Dashboard </NavLink>
        </li>
      )}
    </>
  );
};

export default NavLinks;
