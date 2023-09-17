import { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState();

  const upperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  const lowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const clearText = () => {
    let textClar = " ";
    setText(textClar);
  };

  const changetext = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="p-4">
        <h1>{props.name}</h1>
        <textarea
          className="form-control mt-2"
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
          onChange={changetext}
        ></textarea>
        <div className="flex space-x-20">
          <button
            className="bg-indigo-500 rounded-sm p-1 px-3 mt-3 "
            onClick={upperCase}
          >
            UpperCase
          </button>
          <button
            className="bg-violet-500 rounded-sm p-1 px-3 mt-3 "
            onClick={lowerCase}
          >
            LowerCase
          </button>
          <button
            className="bg-violet-500 rounded-sm p-1 px-3 mt-3 "
            onClick={clearText}
          >
            clearText
          </button>
        </div>
        <div>
          {/* <h1>{text.split(" ").length}</h1> */}
          {/* <p>total length of text is {text.length}</p> */}
        </div>
      </div>
    </>
  );
}
