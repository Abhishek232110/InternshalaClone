import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Index from "../internProject";
import DetailsPage from "../internProject/detailPage/detailsPage";
import PreferenceIndex from "../internProject/prefrenceIntern";
import NamePages from "../internProject/component/components/namePage";
// import CertificatePage from "../internProject/certificat/certificatePage";
import CertificateIndex from "../internProject/certificat";
import UserIndex from "../internProject/userPage";
import NavbarIndex from "../internProject/navbarPage";
import RegisterPage from "../internProject/userPage/component/registerForm";
import userMessage from "../internProject/message/component/userMessage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserIndex />}></Route>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="homePage" element={<Index />}></Route>
        <Route path="NavbarPage" element={<NavbarIndex />}></Route>
        <Route path="detail" element={<DetailsPage />}></Route>
        <Route path="databox" element={<PreferenceIndex />} />
        <Route path="NamePage" element={<NamePages />} />
        <Route path="prefrenceIndex" element={<PreferenceIndex />}></Route>
        <Route path="CertificateIndex" element={<CertificateIndex />} />
        <Route path="userMessage" element={<userMessage />}></Route>
      </Routes>
    </>
  );
}
