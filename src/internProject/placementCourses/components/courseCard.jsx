export function CourseCard({ data }) {
  const {
    course,
    image,
    duration,
    salary,
    internship,
    gaurantee,
    buttontext,
    id,
  } = data;
  return (
    <>
      <div className="flex m-5 w-64" key={id}>
        <div className="  bg-white mx-1  mb-3 float-left ">
          <img src={image} className="h-40 w-full" />
          <div className="p-2">
            <div className=" rounded-md mt-3 w-fit font-bold">{course}</div>
            <div className="  text-xs font-xs flex items-center p-1 text-start pt-2 rounded-sm text-yellow-100 bg-yellow-900">
              {gaurantee}
            </div>
            <span className="  text-xs py-1">{duration}</span>
            <span className="  text-xs py-1">{internship}</span>
            <span className="  text-xs py-1">{salary}</span>

            <div className="flex   ">
              <button className="  text-indigo-700  font-medium py-1  rounded-md outline-none">
                {buttontext}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
