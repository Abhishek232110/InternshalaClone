import { Link } from "react-router-dom";
import NamePages from "./component/components/namePage";
import PlacmentCoursePage from "../internProject/placementCourses/index";

import PreferenceIndex from "./prefrenceIntern";

import DataBox from "./component/components/dataBox";
import DataboxIndex from "./component";

import { useEffect, useState } from "react";

import CertificateIndex from "./certificat";
import NavbarIndex from "./navbarPage";

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <NavbarIndex />
      <NamePages />
      <DataboxIndex />
      <Link to="/prefrenceIndex">
        <PreferenceIndex />
      </Link>
      <Link to="databox">
        <CertificateIndex />
      </Link>
      <PlacmentCoursePage />
    </div>
  );
}
