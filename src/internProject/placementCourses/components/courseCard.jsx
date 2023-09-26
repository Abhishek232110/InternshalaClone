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
      <div className="flex m-5 w-10/12 " key={id}>
        <div className="  bg-white mx-1 rounded-md mb-3 float-left ">
          <img src={image} className="h-40 w-full rounded-t-md" />
          <div className="p-2">
            <div className=" rounded-md my-2 w-fit font-bold">{course}</div>
            <div className="  text-xs font-xs flex items-center p-1 text-start pt-2 rounded-sm text-yellow-100 bg-yellow-900">
              {gaurantee}
            </div>
            <span className="  text-xs py-1">{duration}</span>
            <span className="  text-xs py-1">{internship}</span>
            <span className="  text-xs py-1">{salary}</span>

            <div className="flex   ">
              <button className="  text-indigo-700  font-medium py-1 rounded-md outline-none">
                {buttontext}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
