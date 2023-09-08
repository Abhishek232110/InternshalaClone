import React, { useState } from "react";
import Contact from "../component/contact";

import { urlImf } from "../component/urlImf";
import Summary1 from "../ApiFetch/data.jsx/Summary";
import LoginOtp from "../component/loginOtp";
import { MapFunc } from "./mapFunc";
import Game from "./square";
import Square from "./square";

const Buttons = () => {
  const userDetails = {
    name: "Hedy Lamarr",
    imgurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoszA8qPf_glPW9zOem93d7KebJeZ7Cur96VmxkCE&s",
    roll: 10,
    vill: "Manikpur",
    dist: "chandauli",
  };
  let content;
  // if (urlImf) {
  //   content = <FetchApi />;
  // } else {
  //   content = <Contact />;
  // }

  const UpeerCase = () => {
    console.log(text);
    let showText = text.toUpperCase();
    setText(showText);
  };
  const lowerCase = () => {
    let nextText = text.toLowerCase();
    setText(nextText);
  };
  const ChangeMe = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  // const arr = [10, 20, 30];

  return (
    <>
      <div>
        <nav className="navbar bg-gray-400 px-6">
          <div className="container-fluid">
            <a className="navbar-brand">Home</a>
            <a className="navbar-brand">Contact</a>
            <a className="navbar-brand">About</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="bg-indigo-500 p-2 rounded-md hover:bg-indigo-600"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div>
          <h1 className="p-10">Enter the text to analyze below</h1>
        </div>
        <div className=" mx-10">
          <textarea
            className="form-control"
            onChange={ChangeMe}
            value={text}
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            rows={6}
          ></textarea>
          {/* <label for="floatingTextarea2">Comments</label> */}
        </div>
        <br />
        <div className="ml-10">
          <button
            type="button"
            onClick={UpeerCase}
            className=" bg-indigo-500 p-2 rounded-sm"
          >
            UpperCase
          </button>
          <button
            type="button"
            onClick={lowerCase}
            className="bg-indigo-500 p-2 ml-2 rounded-sm"
          >
            lowerCase
          </button>
        </div>
        {/* <div className="pl-10">
          <p>{userDetails.name}</p>
          <p>{userDetails.roll}</p>
          <p>{userDetails.imgurl}</p>
          <p>{userDetails.dist}</p>
        </div> */}
        <br />
        {/* <div>{content}</div> */}
        {/* <p>//conditional operator//</p> */}
        {/* <div>{urlImf ? <Summary1 /> : <Contact />}</div> */}
        {/* <div>{urlImf && <LoginOtp />}</div> */}
        <div>
          <MapFunc />
        </div>
        <span>
          <Square />
        </span>
      </div>
    </>
  );
};

export default Buttons;
