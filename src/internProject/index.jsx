import { Link } from "react-router-dom";
import NavbarPage from "./component/components/navBar";
import NamePages from "./component/components/namePage";

import PreferenceIndex from "./prefrenceIntern";
import CertificatePage from "./certificat/certificatePage";
import DetailsPage from "./detailPage/detailsPage";
import DataBox from "./component/components/dataBox";
import DataboxIndex from "./component";

import { useEffect, useState } from "react";
import LoginPage from "./userPage/component/loginPage";
import CertificateIndex from "./certificat";

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
      <NavbarPage open={true} />
      {/* <LoginPage /> */}
      <NamePages />
      <Link to="/DataBox">
        <DataboxIndex />
      </Link>
      <PreferenceIndex />

      <Link to="/certificateIndex ">
        <CertificateIndex />
      </Link>
    </div>
  );
}
