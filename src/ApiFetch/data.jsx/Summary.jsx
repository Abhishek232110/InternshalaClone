import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Summary1() {
  const [myData, setmyData] = useState([]);
  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      // console.log(response);
      setmyData(response.data);
    });
  }, []);
  return (
    <div>
      <div>
        {myData.map((post) => {
          return (
            <div>
              <p></p>
              <p>{post.show.name}</p>
              <p>{post.show.url}</p>
              <p>{post.show.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
