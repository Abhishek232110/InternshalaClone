import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Index from "../internProject";
import DetailsPage from "../internProject/detailPage/detailsPage";
import PreferenceIndex from "../internProject/prefrenceIntern";
import NamePages from "../internProject/component/components/namePage";
import CertificatePage from "../internProject/certificat/certificatePage";
import NavbarPage from "../internProject/component/components/navBar";
import CertificateIndex from "../internProject/certificat";
import UserMessage from "../internProject/userPage/component/userMessage";
export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="NavbarPage" element={<NavbarPage />}></Route>
        <Route path="detail" element={<DetailsPage />}></Route>
        <Route path="Databox" element={<PreferenceIndex />} />
        <Route path="NamePage" element={<NamePages />} />
        <Route path="linkPage" element={<PreferenceIndex />}></Route>
        <Route path="CertificateIndex" element={<CertificateIndex />} />
        <Route path="UserMessage" element={<UserMessage />}></Route>
      </Routes>
    </>
  );
}
