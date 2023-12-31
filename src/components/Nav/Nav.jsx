import ThemeToggle from "./ThemeToggle";
import AuthToggle from "./AuthToggle";
import NavLinks from "./NavLinks";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../pages/Loading/Loading";
import { Link } from "react-router-dom";
const Nav = () => {
  const [user, loading, err] = useAuthState(auth);
  if (loading && !err) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks user={user} />
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            GS Tour
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks user={user} />
          </ul>
        </div>
        <div className="navbar-end">
          <AuthToggle user={user} />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
