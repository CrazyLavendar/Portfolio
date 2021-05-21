import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

/* GLOBAL VARIABLES */

window.$primaryLanguage = "en";
window.$secondaryLanguage = "pl";
window.$primaryLanguageIconId = "primary-lang-icon";
window.$secondaryLanguageIconId = "secondary-lang-icon";

ReactDOM.render(
  <BrowserRouter>
    {" "}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.register();
