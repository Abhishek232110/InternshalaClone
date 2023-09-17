import axios from "axios";
import React, { useEffect, useState } from "react";

export const CardPage = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, []);
  return (
    <div>
      {data.map((post) => {
        return (
          <div className="card w-fit">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <img src={post.image_url} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardPage;
