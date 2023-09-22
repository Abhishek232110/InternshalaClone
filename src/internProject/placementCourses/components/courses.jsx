import fullStackImage from "../../../assets/Full_Stack.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function Courses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
  };
  return (
    <>
      <Slider {...settings} className="p-3">
        <div className="flex m-5">
          <div className="  bg-white mx-1 rounded-3xl mb-3 float-left p-4">
            <img src={fullStackImage} className="h-48 w-full" />
            <h1 className=" rounded-md mt-3 w-fit ">
              Full Stack Develoment Course
            </h1>
            <div className="  text-xs font-xs flex items-center p-1 text-start pt-2 rounded-sm text-yellow-100 bg-yellow-900">
              Course with guarantee internship
            </div>
            <p className="  text-start  pt-2">6 months course</p>{" "}
            <p className="  text-start  pt-2">
              Highest stipned offered Rs.11Lac/month
            </p>{" "}
            <p className="  text-start  pt-2">6 months course</p>
            <div className="flex h-20 mt-4 space-x-40 pt-2">
              <div>
                <button className=" bg-white text-indigo-700 px-2 font-medium py-1 mt-3 rounded-md outline-none">
                  Know more{">"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-5">
          <div className="  bg-white mx-1 rounded-3xl mb-3 float-left p-4">
            <img src={fullStackImage} className="h-48 w-full" />
            <h1 className=" rounded-md mt-3 w-fit ">
              Full Stack Develoment Course
            </h1>
            <div className="  text-xs font-xs flex items-center p-1 text-start pt-2 rounded-sm text-yellow-100 bg-yellow-900">
              Course with guarantee internship
            </div>
            <p className="  text-start  pt-2">6 months course</p>{" "}
            <p className="  text-start  pt-2">
              Highest stipned offered Rs.11Lac/month
            </p>{" "}
            <p className="  text-start  pt-2">6 months course</p>
            <div className="flex h-20 mt-4 space-x-40 pt-2">
              <div>
                <button className=" bg-white text-indigo-700 px-2 font-medium py-1 mt-3 rounded-md outline-none">
                  Know more{">"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-5">
          <div className="  bg-white mx-1 rounded-3xl mb-3 float-left p-4">
            <img src={fullStackImage} className="h-48 w-full" />
            <h1 className=" rounded-md mt-3 w-fit ">
              Full Stack Develoment Course
            </h1>
            <div className="  text-xs font-xs flex items-center p-1 text-start pt-2 rounded-sm text-yellow-100 bg-yellow-900">
              Course with guarantee internship
            </div>
            <p className="  text-start  pt-2">6 months course</p>{" "}
            <p className="  text-start  pt-2">
              Highest stipned offered Rs.11Lac/month
            </p>{" "}
            <p className="  text-start  pt-2">6 months course</p>
            <div className="flex h-20 mt-4 space-x-40 pt-2">
              <div>
                <button className=" bg-white text-indigo-700 px-2 font-medium py-1 mt-3 rounded-md outline-none">
                  Know more{">"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-5">
          <div className="  bg-white mx-1 rounded-3xl mb-3 float-left p-4">
            <img src={fullStackImage} className="h-48 w-full" />
            <h1 className=" rounded-md mt-3 w-fit ">
              Full Stack Develoment Course
            </h1>
            <div className="  text-xs font-xs flex items-center p-1 text-start pt-2 rounded-sm text-yellow-100 bg-yellow-900">
              Course with guarantee internship
            </div>
            <p className="  text-start  pt-2">6 months course</p>{" "}
            <p className="  text-start  pt-2">
              Highest stipned offered Rs.11Lac/month
            </p>{" "}
            <p className="  text-start  pt-2">6 months course</p>
            <div className="flex h-20 mt-4 space-x-40 pt-2">
              <div>
                <button className=" bg-white text-indigo-700 px-2 font-medium py-1 mt-3 rounded-md outline-none">
                  Know more{">"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-5">
          <div className="  bg-white mx-1 rounded-3xl mb-3 float-left p-4">
            <img src={fullStackImage} className="h-48 w-full" />
            <h1 className=" rounded-md mt-3 w-fit ">
              Full Stack Develoment Course
            </h1>
            <div className="  text-xs font-xs flex items-center p-1 text-start pt-2 rounded-sm text-yellow-100 bg-yellow-900">
              Course with guarantee internship
            </div>
            <p className="  text-start  pt-2">6 months course</p>{" "}
            <p className="  text-start  pt-2">
              Highest stipned offered Rs.11Lac/month
            </p>{" "}
            <p className="  text-start  pt-2">6 months course</p>
            <div className="flex h-20 mt-4 space-x-40 pt-2">
              <div>
                <button className=" bg-white text-indigo-700 px-2 font-medium py-1 mt-3 rounded-md outline-none">
                  Know more{">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
