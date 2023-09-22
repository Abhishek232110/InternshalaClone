import React, { useState } from "react";
import { useSelector } from "react-redux";
import Datas from "./api";

export default function DataBox() {
  const storeData = useSelector((state) => state.boxSlice.PageData);
  // const [next, setNext] = useState(0);
  // const [show, setShow] = useState(false);
  // const data = Datas[next];
  // let hasNext = next < Datas.length - 1;
  // let hasPrev = next > 0;
  // const nextItem = () => {
  //   {
  //     if (hasNext) {
  //       setNext(next + 1);
  //     }
  //   }
  // };
  // const preItem = () => {
  //   if (hasPrev) {
  //     setNext(next - 1);
  //   }
  // };

  // const showMore = () => {
  //   setShow(!show);
  // };
  return (
    <>
      <div className="flex">
        {storeData.map((post) => {
          return (
            <>
              <div className=" bg-gradient-to-br from-sky-900 to-blue-400 mx-2 rounded-3xl mb-3 float-left">
                <button className=" w-96  px-6 text-white font-sans text-left  ">
                  <h1 className=" rounded-md border pl-2 pr-6 pt-1 pb-1 mt-3 w-fit ">
                    {post.name}
                  </h1>
                  <p className="  text-xl font-bold text-start h-24 pt-2  ">
                    {post.title}
                  </p>
                  <p className="  text-start  pt-2">{post.title1}</p>
                  <div className="flex h-20 mt-4 space-x-40 pt-2">
                    <div>
                      <button className=" bg-white text-indigo-700 px-2 font-medium py-1 mt-3 rounded-md ">
                        {post.button}
                      </button>
                    </div>
                    <img
                      src={post.img}
                      className=" h-16 w-16   rounded-full  "
                    />
                  </div>
                </button>
              </div>
            </>
          );
        })}
      </div>
      {/* <div>
        <button
          onClick={nextItem}
          className="bg-indigo-400 px-3  py-2 rounded-md"
        >
          Next
        </button>
        <button
          onClick={preItem}
          className="bg-indigo-400 px-3  py-2 rounded-md"
        >
          Previus
        </button>
        <div>
          <p>{data.name}</p>
          <p>
            {next + 1} of{Datas.length}
          </p>
          <p></p>
          <button
            className="bg-indigo-400 px-3  py-2 rounded-md"
            onClick={showMore}
          >
            {show ? "hide" : "show"}detail
          </button>
          <p>{show && <p>{data.title1}</p>}</p>
          <p>{show && <img src="com.png"></img>}</p>
        </div>
      </div> */}
    </>
  );
}
