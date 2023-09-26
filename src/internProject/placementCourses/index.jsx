import React from "react";
import { Header } from "./components/header";
import { Courses } from "./components/courses";

const PlacmentCourcesPage = () => {
  return (
    <div className="my-10">
      <div className="bg-blue-50">
        <Header />
        <div>
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default PlacmentCourcesPage;
