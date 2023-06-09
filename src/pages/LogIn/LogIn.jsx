import { useState } from "react";
import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import SocialLogIn from "../../components/SocialLogIn/SocialLogIn";

import LogInFrom from "./LogInFrom";
import RegistrationFrom from "./RegistrationFrom";
const LogIn = () => {
  const [isLogInPage, setIsLogInPage] = useState(true);
  const logInRegistrationToggle = () => {
    setIsLogInPage((pre) => !pre);
  };
  return (
    <div className="container mx-auto  border border-solid border-current rounded-lg p-4">
      <div className="w-full TR-custom-flex">
        <DisplayCenter border={false}>
          {/* Log in form */}
          <div className="p2 border border-solid border-current rounded-lg p-4 min-w-[380px]">
            <div className="text-center text-4xl mt-4 mb-2">
              {"Please "}
              {isLogInPage ? " Log In" : " Registration"}
            </div>
            {isLogInPage ? (
              <LogInFrom
                isLogInPage={isLogInPage}
                logInRegistrationToggle={logInRegistrationToggle}
              />
            ) : (
              <RegistrationFrom
                isLogInPage={isLogInPage}
                logInRegistrationToggle={logInRegistrationToggle}
              />
            )}
          </div>
        </DisplayCenter>
        {/* Divider */}
        <div className="divider divider-horizontal TR-object-divider-horizontal">
          OR
        </div>
        <div className="divider divider-vertical TR-object-divider-vertical">
          OR
        </div>

        <DisplayCenter border={false}>
          {/* Social Log In */}
          <>
            <SocialLogIn />
          </>
        </DisplayCenter>
      </div>
    </div>
  );
};

export default LogIn;
