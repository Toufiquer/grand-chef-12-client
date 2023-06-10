/* eslint-disable react/prop-types */

import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Loading from "../../pages/Loading/Loading";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const AuthToggle = ({ user }) => {
  const [errMsg, setErrMsg] = useState("");
  const [signOut, loading, error] = useSignOut(auth);
  useEffect(() => {
    if (error) {
      setErrMsg(error?.message);
    }
  }, [error]);
  if (loading && !error) {
    return <Loading />;
  }
  return (
    <>
      {/* Log In || Sign Out */}
      {!user ? (
        <>
          <a className="btn">Log In</a>
        </>
      ) : (
        <>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://tr-portfolio-0.netlify.app/assets/img/skill-2.jpg" />
            </div>
          </label>
          {errMsg.length >= 3 && (
            <span className="label-text-alt text-red-500">{errMsg}</span>
          )}
          <a className="btn mx-2  " onClick={() => signOut()}>
            Sign Out
          </a>
        </>
      )}
    </>
  );
};
export default AuthToggle;
