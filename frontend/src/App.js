import { useState } from "react";
import "./App.css";
import SignUp from "./SignUp";
import img1 from "./img1.png";
import logoicon from "./icons_landing.png";
import google from "./devicon_google.png";
import SignIn from "./SignIn";

export default function App() {
  const [view, setView] = useState("default");

  return (
    <div className="container">
      <div className="box">
        <div className="left-section">
          <div className="logo-section">
            <img src={logoicon} alt="Logo" />
          </div>
          {view === "default" ? (
            <>
              <h1>Join Us!</h1>
              <p>We show you where and how to build</p>
              <div className="google-signin-btn">
                <button type="button" onClick={() => setView("signin")}>
                  <img src={google} alt="Google Icon" /> {/* Your Google icon */}
                  Continue with Google
                </button>
              </div>
              <div className="or-line">
                <span>OR</span>
              </div>
              <SignUp goBack={() => setView("default")} />
              <p className="sign-in-text">
                Already have an account?{" "}
                <span onClick={() => setView("SignIn")}>Sign In</span>
              </p>
            </>
          ) : (
            <SignUp goBack={() => setView("default")} />
          )}
        </div>
        <div className="right-section">
          <img src={img1} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
}
