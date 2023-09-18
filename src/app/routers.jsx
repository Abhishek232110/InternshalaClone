import { Route, Routes } from "react-router-dom";
import Index from "../internProject";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </>
  );
}
