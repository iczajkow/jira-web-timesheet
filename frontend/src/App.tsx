import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
  const [message, setMessage] = useState("");

  axios
    .get("/api/users/all")
    .then(response => setMessage(response.data.message));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </header>
    </div>
  );
};

export default App;
