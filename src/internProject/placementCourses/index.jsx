import React from "react";
import { Header } from "./components/header";
import { Courses } from "./components/courses";
import App from "../../App";

import { ContinueWithGoogle } from "./components/continueWithGoogle";

const PlacmentCourcesPage = () => {
  return (
    <div className="bg-blue-50 h-full m-0 p-0 box-border w-full ">
      <Header />
      <Courses />
      <ContinueWithGoogle />

      <App />
    </div>
  );
};

export default PlacmentCourcesPage;
