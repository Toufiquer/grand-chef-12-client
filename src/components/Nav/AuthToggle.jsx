// eslint-disable-next-line react/prop-types
const AuthToggle = ({ isLoggedIn }) => {
  return (
    <>
      {/* Log In || Sign Out */}
      {isLoggedIn ? (
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
          <a className="btn mx-2 ">Sign Out</a>
        </>
      )}
    </>
  );
};
export default AuthToggle;
