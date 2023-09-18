import Preference from "./preference";

export default function PreferenceIndex() {
  return (
    <>
      <div className="bg-green-100">
        <h1 className="text-center mt-10  text-3xl  font-semibold pt-5">
          Internship
        </h1>
        <div className="flex items-center justify-center py-2">
          <h1> as per your</h1>
          <a href="" className="pl-1 text-blue-600">
            preference
          </a>
        </div>
        <div className="flex my-2  ">
          <div className="w-36 "></div>
          <div className="  overflow-auto py-3">
            <Preference />
          </div>
          <div className="w-36 "></div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
