import { Link } from "react-router-dom";
import NavbarPage from "./component/components/navBar";
import NamePages from "./component/components/namePage";

import PreferenceIndex from "./prefrenceIntern";
import CertificatePage from "./certificat/certificatePage";
import DetailsPage from "./detailPage/detailsPage";
import DataBox from "./component/components/dataBox";
import DataboxIndex from "./component";

export default function Index() {
  return (
    <div className="">
      <NavbarPage />
      <NamePages />
      <Link to="/DataBox">
        <DataboxIndex />
      </Link>
      <PreferenceIndex />

      <Link to="/certificatePage ">
        <CertificatePage />
      </Link>
    </div>
  );
}
