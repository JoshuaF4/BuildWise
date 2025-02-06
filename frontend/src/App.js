import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./style.css";
import "./App.css";
import img1 from "./img1.png";
import logoicon from "./icons_landing.png";
import google from "./devicon_google.png";


export default function App() {
  const [view, setView] = useState("default");
  const [selectedItem, setSelectedItem] = useState("Application");

  return (
    <div className="container">
      {view === "dashboard" ? (
        <div className="app">
          <Sidebar setSelectedItem={setSelectedItem} />
          <Dashboard selectedItem={selectedItem} />
        </div>
      ) : (
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
                  <button type="button" onClick={() => setView("dashboard")}>
                    <img src={google} alt="Google Icon" />
                    Continue with Google
                  </button>
                </div>
                <div className="or-line">
                  <span>OR</span>
                </div>
                <SignUp goToDashboard={() => setView("dashboard")} />
                <p className="sign-in-text">
                  Already have an account?{" "}
                  <span onClick={() => setView("signin")}>Sign In</span>
                </p>
              </>
            ) : view === "signin" ? (
              <SignIn goBack={() => setView("default")} goToDashboard={() => setView("dashboard")} />
            ) : (
              <SignUp goBack={() => setView("default")} goToDashboard={() => setView("dashboard")} />
            )}
          </div>
          <div className="right-section">
            <img src={img1} alt="Placeholder" />
          </div>
        </div>
      )}
    </div>
  );
}
