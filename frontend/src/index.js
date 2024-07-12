import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "primeicons/primeicons.css";
import "primeflex/themes/primeone-dark.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
