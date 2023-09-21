import { Link } from "react-router-dom";
import CertificateData from "./data";

export default function CertificatePage() {
  const data = CertificateData;

  return (
    <>
      <div className="flex">
        {data.map((res) => {
          return (
            <div className="  float-left ">
              <a href="">
                <div className="text-black  mx-1 border rounded-lg my-1 text-sm bg-white  w-72  ">
                  <div className=" h-full">
                    <img
                      src={res.image}
                      className=" rounded-lg    h-20 ml-16"
                    />
                  </div>
                  <div className=" pt-3 px-2">
                    <h1>{res.week}</h1>

                    <div className="flex  ">
                      {/* <LocationOnOutlined fontSize="small"></LocationOnOutlined> */}
                      <p className="text-lg">{res.course}</p>
                    </div>
                    <div className="flex pt-2">
                      {/* <AttachMoneyOutlined fontSize="small"></AttachMoneyOutlined> */}
                      <p className="pl-2">{res.rating}</p>
                      <div className="border-x-2"></div>
                      <p className="pl-2">{res.Number}</p>
                    </div>
                    <div className="flex py-2">
                      <p className="pl-4">{res.month}</p>
                    </div>
                    <br />
                    <br />
                    <Link to="databox" className=" ">
                      <button className="bg-indigo-400 p-2 rounded-sm hover:text-white">
                        View Details {">"}
                      </button>
                    </Link>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
