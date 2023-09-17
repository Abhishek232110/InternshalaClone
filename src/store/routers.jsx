import { Route, Routes } from "react-router-dom";

import Index from "../cloneOfInternship";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </>
  );
}
