import React from "react";

export default function DataBox() {
  return (
    <>
      <div className="flex">
        <div className=" w-36"></div>
        <div className="flex  overflow-x-scroll">
          <SlideBar
            name=" PLACEMENT GUARANTEE COURSES"
            img="boy.jpeg"
            button="Know more"
            title="Experience the power of NSDC and Skill India - approved certifications"
            title1="Enroll now and get 55% + 10% OFF "
          />
          <SlideBar
            name="INTERNSHALA TRAININGS"
            img="both.jpeg"
            button="Know more"
            title="Experience the power of NSDC and Skill India - approved certifications"
            title1="Enroll now and get 55% + 10% OFF "
          />
          <SlideBar
            name="JOBS"
            img="oneSide.jpeg"
            button="Apply now"
            title="Experience the power of NSDC and Skill India - approved certifications"
            title1="Enroll now and get 55% + 10% OFF "
          />
          <SlideBar
            name="INTERNSHIP"
            img="three.webp"
            button="Apply now"
            title="Experience the power of NSDC and Skill India - approved certifications"
            title1="Enroll now and get 55% + 10% OFF "
          />
          <SlideBar
            name="INTERNSHALA TRAININGS"
            img="laptopWork.jpg"
            button="Know more"
            title="Experience the power of NSDC and Skill India - approved certifications"
            title1="Enroll now and get 55% + 10% OFF "
          />
        </div>
        <div className="w-24"></div>
      </div>
    </>
  );
}

function SlideBar(props) {
  return (
    <>
      <div className=" bg-gradient-to-br from-blue-700 to-blue-400 mx-2 rounded-3xl mb-3 ">
        <button className=" w-96 pl-6  ">
          <h1 className=" rounded-md border pl-2 pr-6 pt-1 pb-1 mt-3 w-fit text-white  font-mono">
            {props.name}
          </h1>
          <p className=" text-white text-2xl font-bold text-start w-fit mt-3 ">
            {props.title}
          </p>
          <p className="text-white text-lg text-start w-fit mt-2">
            {props.title1}
          </p>
          <div className="flex  mt-4 space-x-40">
            <div>
              <button className=" bg-white text-indigo-700 px-3 font-medium py-1 rounded-md ">
                {props.button}
              </button>
            </div>
            <img src={props.img} className=" h-16 w-16   rounded-full  " />
          </div>
        </button>
      </div>
    </>
  );
}
