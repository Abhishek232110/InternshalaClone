import React from "react";
const products = [
  {
    title: "garlic",
    id: 1,
  },
  {
    title: "bread",
    id: 2,
  },
  {
    title: "apple",
    id: 3,
  },
];
export const MapFunc = () => {
  return (
    <>
      <div className="pl-10">
        <div>mapFunc</div>
        {products.map((data) => {
          return (
            <div>
              <li className="text-indigo-600 " key={data.id}>
                {data.title}
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
};
