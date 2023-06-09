import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/logIn">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/addTour">AddTour</NavLink>
      </li>
      <li>
        <NavLink to="/adminDashboard">AdminDashboard</NavLink>
      </li>
      <li>
        <NavLink to="/studentDashboard">StudentDashboard</NavLink>
      </li>
    </>
  );
};

export default NavLinks;
