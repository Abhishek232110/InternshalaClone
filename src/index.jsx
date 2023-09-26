import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import "./index.css";
import { Store } from "./app/store";
import App from "./App.jsx";
import FooterPage from "./common";

import RegisterPage from "./internProject/userPage/component/registerForm";
import UserLogin from "./internProject/userPage/component/userLogin";

ReactDOM.createRoot(document.getElementById("roots")).render(
  // <React.StrictMode>
  <Provider store={Store}>
    <BrowserRouter>
      <App />
      {<RegisterPage /> && <UserLogin /> ? null : <FooterPage />}
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
