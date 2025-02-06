// App.js

import React, { useState, useEffect } from "react";
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
  const [leads, setLeads] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const leadsResponse = await fetch("http://localhost:3000/leads");
        if (!leadsResponse.ok) {
          throw new Error(`HTTP error fetching leads! status: ${leadsResponse.status}`);
        }
        const leadsData = await leadsResponse.json();
        setLeads(leadsData);

        const customersResponse = await fetch("http://localhost:3000/customers");
        if (!customersResponse.ok) {
          throw new Error(`HTTP error fetching customers! status: ${customersResponse.status}`);
        }
        const customersData = await customersResponse.json();
        setCustomers(customersData);

        const projectsResponse = await fetch("http://localhost:3000/projects");
        if (!projectsResponse.ok) {
          throw new Error(`HTTP error fetching projects! status: ${projectsResponse.status}`);
        }
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSignIn = async (email, password) => {
    console.log(`SignIn`);
    setError(null);
    try {
      const signInResponse = await fetch("http://localhost:3000/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!signInResponse.ok) {
        throw new Error(`Sign-in failed with status: ${signInResponse.status}`);
      }
      console.log("Sign-in successful");
    } catch (err) {
      setError(`Sign-in error: ${err.message}`);
    }
  };

  const handleSignUp = async (name, email, password) => {
    console.log(`SignUp`);
    setError(null);
    try {
      const signUpResponse = await fetch("http://localhost:3000/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!signUpResponse.ok) {
        throw new Error(`Sign-up failed with status: ${signUpResponse.status}`);
      }
      console.log("Sign-up successful");
    } catch (err) {
      setError(`Sign-up error: ${err.message}`);
    }
  };

  const createLead = async (newLead) => {
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLead),
      });

      if (response.ok) {
        const lead = await response.json();
        setLeads((prevLeads) => [...prevLeads, lead]);
      } else {
        throw new Error(`Failed to create lead: ${response.status}`);
      }
    } catch (err) {
      setError(`Error creating lead: ${err.message}`);
    }
  };

  const createCustomer = async (newCustomer) => {
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      });

      if (response.ok) {
        const customer = await response.json();
        setCustomers((prevCustomers) => [...prevCustomers, customer]);
      } else {
        throw new Error(`Failed to create customer: ${response.status}`);
      }
    } catch (err) {
      setError(`Error creating customer: ${err.message}`);
    }
  };

  const createProject = async (newProject) => {
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        const project = await response.json();
        setProjects((prevProjects) => [...prevProjects, project]);
      } else {
        throw new Error(`Failed to create project: ${response.status}`);
      }
    } catch (err) {
      setError(`Error creating project: ${err.message}`);
    }
  };

  return (
    <div className="container">
      {error && <div className="error-message">Error: {error}</div>}
      {isLoading ? (
        <div className="loading-message">Loading...</div>
      ) : (
        view === "dashboard" ? (
          <div className="app">
            <Sidebar setSelectedItem={setSelectedItem} />
            <Dashboard
              selectedItem={selectedItem}
              leads={leads}
              customers={customers}
              projects={projects}
              createLead={createLead}
              createCustomer={createCustomer}
              createProject={createProject}
            />
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
                  <SignUp
                    goToDashboard={() => setView("dashboard")}
                    handleSignUp={handleSignUp}
                  />
                  <p className="sign-in-text">
                    Already have an account?{" "}
                    <span onClick={() => setView("signin")}>Sign In</span>
                  </p>
                </>
              ) : view === "signin" ? (
                <SignIn
                  goBack={() => setView("default")}
                  goToDashboard={() => setView("dashboard")}
                  handleSignIn={handleSignIn}
                />
              ) : (
                <SignUp
                  goBack={() => setView("default")}
                  goToDashboard={() => setView("dashboard")}
                  handleSignUp={handleSignUp}
                />
              )}
            </div>
            <div className="right-section">
              <img src={img1} alt="Placeholder" />
            </div>
          </div>
        )
      )}
    </div>
  );
}
