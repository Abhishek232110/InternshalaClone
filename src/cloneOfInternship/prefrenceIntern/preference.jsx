export default function PreferenceIntern() {
  return (
    <>
      <div className="bg-green-100 ">
        <div className="text-center my-20 pt-10">
          <h1 className="text-3xl font-medium py-2">Internships</h1>
          <h1>
            as per your
            <a href="" className="text-indigo-600 ">
              refrence
            </a>
          </h1>
        </div>
        <div className="flex pb-10">
          <div className=" w-40 bg-slate-500"></div>
          <div className="flex overflow-x-scroll w-full mx-1">
            <Slide1
              hiring="Actively hiring"
              imge="growth.png"
              title="Marketing Automation"
              company="Idea Usher"
            />
            <Slide1 hiring="Actively hiring" imge="growth.png" />
            <Slide1 hiring="PHP Web Development" imge="growth.png" />
            <Slide1 hiring="Web Development" imge="growth.png" />
            <Slide1 hiring="Founder's Office-Web3 Project" imge="growth.png" />
            <Slide1 hiring="Actively hiring" imge="growth.png" />
            <Slide1 hiring="Actively hiring" imge="growth.png" />
          </div>
          <div className=" w-40 bg-indigo-600"></div>
        </div>
      </div>
    </>
  );
}

function Slide1(props) {
  return (
    <>
      <div className="bg-white mx-2 h-96 rounded-md  mb-3 ">
        <button className="  px-4 mt-3 ">
          <div className="flex rounded-sm border w-fit">
            <img src={props.imge} className=" w-5 h-5 " />
            <h1 className="px-2">{props.hiring}</h1>
          </div>
          <div className="text-start  ">
            <h1 className=" pt-3 font-semibold">{props.title}</h1>
            <span>{props.company}</span>
          </div>
          {/* <img src={props.logo} className="  text-2xl text-start w-80"></img> */}
          <div className="border-b-2"></div>
          <div className="flex  mt-4 space-x-40">
            <div>
              <button className=" bg-indigo-400 px-3 font-medium py-1 rounded-md mt-10">
                Know more
              </button>
            </div>
            <img
              src="/"
              className=" h-16 w-16  mt-4 rounded-full  "
              alt="..."
            />
          </div>
        </button>
      </div>
    </>
  );
}
