import React, { useState } from "react";
import SignIn from "./sign-in.component";
import SignUp from "./sign-up.component";
import PanelContainer from "./panel.container";
import "./total.container.style.css";

const TotalLoginPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignIn />
          <SignUp />
          {/* handleSignInClick={handleSignInClick} */}
        </div>
        <PanelContainer
          handleSignUpClick={handleSignUpClick}
          handleSignInClick={handleSignInClick}
        />
      </div>
    </div>
  );
};

export default TotalLoginPage;
