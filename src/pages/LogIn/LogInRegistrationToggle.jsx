/* eslint-disable react/prop-types */

const LogInRegistrationToggle = ({ isLogInPage, logInRegistrationToggle }) => {
  return (
    <>
      {/* Link to Registration */}
      <div className="py-2 flex">
        <div className="label-text-alt text-primary-500  flex ">
          New Here,
          <div onClick={logInRegistrationToggle}>
            {" "}
            <span className="underline ml-2 cursor-pointer">
              {!isLogInPage ? "Log In" : "Registration"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInRegistrationToggle;
