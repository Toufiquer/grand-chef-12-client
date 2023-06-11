/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useGetUserQuery } from "../../redux/features/users/usersApi";

const RequireAuth = ({ children, requireRole }) => {
  const [invoke, setInvoke] = useState(true);
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const { data: userData } = useGetUserQuery(user?.email, { skip: invoke });
  useEffect(() => {
    if (user?.email) {
      setInvoke(false);
    }
  }, [user]);
  let content;
  if (loading && !error) {
    content = <p>Loading...</p>;
  }
  if (!loading && error) {
    content = <p>{error}</p>;
  }
  if (!loading && !error) {
    content = children;
  }
  // to invoke all route
  if (!loading && !error && !(userData?.role === requireRole) && false) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }
  return content;
};

export default RequireAuth;
