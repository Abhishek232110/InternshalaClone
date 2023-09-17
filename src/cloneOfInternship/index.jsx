import React from "react";

import NamePages from "./component/namePage";
import DataBox from "./component/dataBox";
import NavbarPage from "./component/navBar";

import CertificatePage from "./certificat/certificatePage";
import PreferenceIntern from "./prefrenceIntern/preference";

export default function Index() {
  return (
    <div className="">
      <NavbarPage />
      <NamePages />
      <DataBox />
      <PreferenceIntern />
      <CertificatePage />
    </div>
  );
}
