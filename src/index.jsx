import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import "./index.css";
import { Store } from "./app/store";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("roots")).render(
  // <React.StrictMode>
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
