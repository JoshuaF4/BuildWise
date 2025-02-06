import { useState } from "react";
import "./App.css";
import SignUp from "./SignUp";
import img1 from "./img1.png";
import logoicon from "./icons_landing.png";
import google from "./devicon_google.png";
import SignIn from "./SignIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
