import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Index from "../internProject";
import DetailsPage from "../internProject/detailPage/detailsPage";
import PreferenceIndex from "../internProject/prefrenceIntern";
import NamePages from "../internProject/component/components/namePage";
import CertificatePage from "../internProject/certificat/certificatePage";
export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="detail" element={<DetailsPage />}></Route>
        <Route path="Databox" element={<PreferenceIndex />} />
        <Route path="NamePage" element={<NamePages />} />
        <Route path="linkPage" element={<PreferenceIndex />}></Route>
        <Route path="CertificatePage" element={<CertificatePage />} />
      </Routes>
    </>
  );
}
