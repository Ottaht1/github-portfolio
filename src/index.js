import React, { Component } from "react";
import { render } from "react-dom";

import App from "./App";
import "./App.css";

const App = () => (
  <div>
    <h1> Repositories</h1>
    <App />
  </div>
);

render(<App />, document.getElementById("root"));
