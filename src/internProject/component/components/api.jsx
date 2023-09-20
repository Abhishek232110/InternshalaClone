// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function DataApi() {
//   const [data, setData] : useState([]);
//   useEffect(() :> {
//     axios
//       .get("https://fakestoreapi.com/products/category/jewelery")
//       .then((response) :> {
//         console.log(response);
//         setData(response.data);
//       });
//   }, []);
//   return (
//     <>
//       <div>
//         {data.map((post) :> {
//           return <></>;
//         })}
//       </div>
//     </>
//   );
// }

const Datas = [
  {
    name: " PLACEMENT GUARANTEE COURSES",
    img: "boy.jpeg",
    button: "Know more",
    title: "Online Courses with Placement Guarantee",
    title1: "Enroll now and get 55% + 10% OFF ",
  },
  {
    name: "INTERNSHALA TRAININGS",
    img: "both.jpeg",
    button: "Know more",
    title:
      "Experience the power of NSDC and Skill India - approved certifications",
    title1: "Enroll now and get 55% + 10% OFF ",
  },
  {
    name: "JOBS",
    img: "oneSide.jpeg",
    button: "Apply now",
    title: "In ternshala Jobs",
    title1: "Enroll now and get 55% + 10% OFF ",
  },
  {
    name: "INTERNSHIP",
    img: "three.webp",
    button: "Apply now",
    title: "International Remote Internships",
    title1: "Enroll now and get 55% + 10% OFF ",
  },
  {
    name: "INTERNSHALA TRAININGS",
    img: "laptopWork.jpg",
    button: "Know more",
    title: "Internshala Skill India Scholarship",
    title1: "Enroll now and get 55% + 10% OFF ",
  },
];
export default Datas;
