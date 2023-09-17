export default function Data2() {
  return (
    <>
      <div className="bg-green-50 ">
        <div className="text-center my-20 pt-10">
          <h1 className="text-3xl font-medium py-2">Internships</h1>
          <h1>
            as per your
            <a href="" className="text-indigo-600 ">
              refrence
            </a>
          </h1>
        </div>
        <div className="flex pb-10">
          <div className=" w-32"></div>
          <div className="flex overflow-x-scroll">
            <Slide1 />
            <Slide1 />
            <Slide1 />
            <Slide1 />
            <Slide1 />
            <Slide1 />
            <Slide1 />
          </div>
          <div className=" w-32"></div>
        </div>
      </div>
    </>
  );
}

function Slide1() {
  return (
    <>
      <div className=" bg-indigo-500 mx-3 rounded-3xl mb-3 ">
        <button className=" w-96 pl-6 h-64 ">
          <h1 className=" rounded-md border p-1 pl-1 w-72 text-white">
            PLACEMENT GUARANTEE COURSES
          </h1>
          <p className=" text-white text-2xl text-start w-80">
            Online Courses with guaranteed placement
          </p>
          <div className="flex  mt-4 space-x-40">
            <div>
              <button className=" bg-white text-indigo-700 px-3 font-medium py-1 rounded-md mt-10">
                Know more
              </button>
            </div>
            <img
              src="boy.jpeg"
              className=" h-16 w-16  mt-4 rounded-full  "
              alt="..."
            />
          </div>
        </button>
      </div>
    </>
  );
}
