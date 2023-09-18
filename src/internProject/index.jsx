import NavbarPage from "./component/navBar";
import NamePages from "./component/namePage";
import DataBox from "./component/dataBox";
import PreferenceIndex from "./prefrenceIntern/index";
import CertificatePage from "./certificat/certificatePage";
export default function Index() {
  return (
    <div className="">
      <NavbarPage />
      <NamePages />
      <DataBox />
      <PreferenceIndex />
      <CertificatePage />
    </div>
  );
}
