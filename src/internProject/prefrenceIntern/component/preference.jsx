import {
  AttachMoneyOutlined,
  CalendarMonthOutlined,
  Home,
  LocationCity,
  LocationOnOutlined,
  Money,
  TimeToLeave,
  ViewDay,
} from "@mui/icons-material";
import { PreferenceData } from "./data";
import Icon from "@mui/material/Icon";
export default function Preference() {
  const data = PreferenceData;

  return (
    <>
      <div className="flex">
        {data.map((res) => {
          return (
            <div className="  float-left ">
              <a href="" className=" hover:text-black">
                <div className="  mx-1 border rounded-lg my-1 text-sm bg-white  w-72 p-3 ">
                  <div className="flex rounded-sm border w-fit ">
                    <img src={res.imge} className=" w-5 h-4 " />
                    <h1 className="px-2 text-center">{res.logo}</h1>
                  </div>
                  <h1 className="pt-3 text-lg font-medium">{res.job}</h1>
                  <h1 className="">{res.company}</h1>
                  <div className="border-b-2 pt-8"></div>
                  <div className="flex    pt-4">
                    <LocationOnOutlined fontSize="small"></LocationOnOutlined>
                    <p className="pl-2">{res.location}</p>
                  </div>
                  <div className="flex pt-2">
                    <AttachMoneyOutlined fontSize="small"></AttachMoneyOutlined>
                    <p className="pl-2">{res.sallary}</p>
                  </div>
                  <div className="flex py-2">
                    <i class="bi bi-calendar4"></i>
                    <p className="pl-3">{res.month}</p>
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
