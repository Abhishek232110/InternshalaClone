import React from "react";
import ResponsiveAppBar from "./component/navBar";
import NamePages from "./component/namePage";
import DataBox from "./component/dataBox";
import NavbarPage from "./component/navBar";
// import SlidePage from "./slides/slidePage";
import Data2 from "./component/data2";
import CertificatePage from "./component/certificatePage";

export default function Index() {
  return (
    <div className="">
      <NavbarPage />
      <NamePages />
      <DataBox />
      <Data2 />
      <CertificatePage />
    </div>
  );
}
