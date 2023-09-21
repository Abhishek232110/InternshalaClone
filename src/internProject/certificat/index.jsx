import { Link } from "react-router-dom";
import CertificatePage from "./certificatePage";

export default function CertificateIndex() {
  return (
    <>
      <div className="text-black ">
        <h1 className="text-center mt-10  text-3xl  font-semibold pt-5">
          Certification Courses for you
        </h1>
        <div className="flex my-2  ">
          <div className="w-28 "></div>
          <div className="  overflow-x-scroll py-3">
            <CertificatePage />
          </div>
          <div className="w-24 "></div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
