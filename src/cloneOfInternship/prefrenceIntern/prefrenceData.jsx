import { PreferenceData } from "./data";
export default function PreferenceDatas() {
  // var API = "181d9bfe8f314d33b5aa68cc5e14ec71";
  // console.log(API);
  const data = PreferenceData;
  // console.log(data);
  return (
    <>
      <div className="flex">
        {data.map((res) => {
          return (
            <div className="  float-left ">
              <a href="" className=" hover:text-black">
                {" "}
                <div className="  mx-1 border rounded-lg my-1 text-sms bg-white  w-72 p-3 ">
                  <div className="flex rounded-sm border w-fit ">
                    <img src={res.imge} className=" w-5 h-4 " />
                    <h1 className="px-2 text-center">{res.logo}</h1>
                  </div>
                  <h1 className="pt-3 text-lg font-medium">{res.job}</h1>
                  <h1 className="">{res.company}</h1>
                  <div className="border-b-2 pt-8"></div>
                  <div className="flex    pt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-geo-alt w-4 h-5s"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <p className="pl-2">{res.location}</p>
                  </div>
                  <div className="flex pt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-cash w-4 h-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                    </svg>
                    <p className="pl-2">{res.sallary}</p>
                  </div>
                  <div className="flex py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-calendar2-date-fill w-4 h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.402 10.246c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-4.118 9.79c1.258 0 2-1.067 2-2.872 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684c.047.64.594 1.406 1.703 1.406zm-2.89-5.435h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675V7.354z" />
                    </svg>
                    <p className="pl-2">{res.month}</p>
                  </div>
                  <br />
                  <br />
                  <br />
                  <a href="" className="text-indigo-600 ">
                    View Details {">"}
                  </a>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
