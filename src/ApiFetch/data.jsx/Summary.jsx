import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApiFetch() {
  const [myData, setmyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((response) => {
        console.log(response);
        setmyData(response.data);
      });
  }, []);
  return (
    <div>
      <div>
        {myData.map((post) => {
          console.log(post);
          return (
            <div className=" p-2 border  grid grid-cols-3 gap-4 content-start ">
              <div className="card items-center  ">
                <img src={post.image_url} className="w-14 h-28" alt="..." />
                <div className="">
                  <h5 className="card-title">{post.name}</h5>
                  <p className="card-text">
                    Some quick example text to <br />
                    build on the card title and make
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
