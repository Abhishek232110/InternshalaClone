import React from "react";

import NamePages from "./component/namePage";
import DataBox from "./component/dataBox";
import NavbarPage from "./component/navBar";

import CertificatePage from "./certificat/certificatePage";
import PreferenceIndex from "./prefrenceIntern";

export default function Index() {
  return (
    <div>
      <NavbarPage />
      <NamePages />
      <DataBox />
      <PreferenceIndex />
      <CertificatePage />
    </div>
  );
}
