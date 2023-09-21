import { Link } from "react-router-dom";
import NamePages from "./component/components/namePage";

import PreferenceIndex from "./prefrenceIntern";

import DataBox from "./component/components/dataBox";
import DataboxIndex from "./component";

import { useEffect, useState } from "react";

import CertificateIndex from "./certificat";

import NavbarIndex from "./navbarPage";

export default function Index() {
  const [open, setOpen] = useState(false);
  let emailId;
  useEffect(() => {
    if ("abhi@gmail.com") {
      setOpen(<DataBox />);
    }
  }, []);
  return (
    <div className="">
      <NamePages />
      <Link to="/dataBox">
        <DataboxIndex />
      </Link>
      <Link to="/prefrenceIndex">
        <PreferenceIndex />
      </Link>

      <Link to="databox">
        <CertificateIndex />
      </Link>
    </div>
  );
}
