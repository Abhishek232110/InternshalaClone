import { useState } from "react";
import { sculptureList } from "./imageList";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  console.log(sculpture);
  return (
    <>
      <h3 className="w-44 text-center">
        ({index + 1} of {sculptureList.length})
      </h3>

      <img className="w-52 h-40" src={sculpture.url} alt={sculpture.alt} />
      <p className="text-lg w-44 text-center my-2">{sculpture.name}</p>
      <button
        className="bg-indigo-500 w-44 text-center text-white p-1 rounded-sm my-1"
        onClick={handleNextClick}
      >
        Next
      </button>
      <div>
        {showMore && <p>{sculpture.description}</p>}
        <button
          className="bg-indigo-500 w-44 text-center text-white p-1 rounded-sm my-1"
          onClick={handleMoreClick}
        >
          {showMore ? "Hide" : "Show"}Details
        </button>
      </div>
    </>
  );
}
