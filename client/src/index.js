import React from "react";
import ReactDOM from "react-dom";

import Login from "./login";
import Support from "./components/Admin_Pages/Support_Admin";
import Finance from "./components/Admin_Pages/Finance_Admin.js";
import Sales from "./components/Admin_Pages/Sales_Admin";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/component-CSS/main.css";
import HR from "./components/Admin_Pages/HR";

ReactDOM.render(
  <Login />,
  // <Support />,
  // <Sales/>,
  document.getElementById("root")
);
