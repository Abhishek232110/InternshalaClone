import React from "react";
export function Link({ d }) {
  return (
    <div className="flex justify-around mx-4">
      <a href="#">{d.link1}</a>
      <a href="#">{d.link2}</a>
      <a href="#">{d.link3}</a>
      <a href="#">{d.link4}</a>
      <a href="#">{d.link5}</a>
      <a href="#">{d.link6}</a>
      <a href="#">{d.link7}</a>
    </div>
  );
}
const FooterPage = () => {
  const d = new Date();
  let year = d.getFullYear();
  // Define the data for the footer

  const data = [
    {
      id: 1,
      title: "Internship by places",
      link1: "Internship in India",
      link2: "Internship in Delhi",
      link3: "Internship in Banglore",
      link4: "Internship in Mumbai",
      link5: "Internship in Hydrabad",
      link6: "Internship in India",
      link7: "Internship in Delhi",
    },
    {
      id: 2,
      title: "Internship by Stream",
      link1: "Internship in India",
      link2: "Internship in Delhi",
      link3: "Internship in Banglore",
      link4: "Internship in Mumbai",
      link5: "Internship in Hydrabad",
      link6: "Internship in India",
      link7: "Internship in Delhi",
    },
    {
      id: 3,
      title: "Jobs by Places",
      link1: "Internship in India",
      link2: "Internship in Delhi",
      link3: "Internship in Banglore",
      link4: "Internship in Mumbai",
      link5: "Internship in Hydrabad",
      link6: "Internship in India",
      link7: "Internship in Delhi",
    },
    {
      id: 4,
      title: "Jobs by Stream",
      link1: "Internship in India",
      link2: "Internship in Delhi",
      link3: "Internship in Banglore",
      link4: "Internship in Mumbai",
      link5: "Internship in Hydrabad",
      link6: "Internship in India",
      link7: "Internship in Delhi",
    },
    {
      id: 5,
      title: "Online Trainings",
      link1: "Internship in India",
      link2: "Internship in Delhi",
      link3: "Internship in Banglore",
      link4: "Internship in Mumbai",
      link5: "Internship in Hydrabad",
      link6: "Internship in India",
      link7: "Internship in Delhi",
    },
  ];

  return (
    <>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto ">
          {data.map((d) => {
            return (
              <>
                {/* <div>{d.title}</div> */}

                <Link d={d} />
              </>
            );
          })}
        </div>
        <hr className="my-5" />
        <div className="flex justify-end py-5">
          &copy; {year} Your Company. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
