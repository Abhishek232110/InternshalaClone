import NavbarPage from "./component/navBar";
import NamePages from "./component/namePage";
import DataBox from "./component/dataBox";
import PreferenceIndex from "./prefrenceIntern/index";
import CertificatePage from "./certificat/certificatePage";
import { Link, Router } from "react-router-dom";
import DetailsPage from "./detailPage/detailsPage";
export default function Index() {
  return (
    <div className="">
      <NavbarPage />
      <NamePages />
      <Link to="/DataBox">
        <DataBox />
      </Link>

      <PreferenceIndex />

      <Link to="/certificatePage ">
        <CertificatePage />
      </Link>
      <Link to="/detail">
        <DetailsPage />
      </Link>
    </div>
  );
}
