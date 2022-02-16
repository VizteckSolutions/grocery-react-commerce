/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 26/01/2022 - 10:54:49
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/01/2022
 * - Author          :
 * - Modification    :
 **/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./context/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
