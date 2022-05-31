import React from "react";
import ReactDOM from "react-dom";

import { RootCmp } from "./RootCmp";
import './style/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <RootCmp />
  </React.StrictMode>,
  document.getElementById("root")
);
