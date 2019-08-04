import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  //we will wrap up our application with "browserRouter"
  //this component gives our applicaiton sitting between the component
  //all the functionality of routing, that this library provides
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
