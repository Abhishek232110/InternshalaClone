import PreferenceDatas from "./prefrenceData";
export default function PreferenceIndex() {
  return (
    <>
      <div className="bg-green-100">
        <h1 className="text-center my-10 text-2xl font-semibold pt-5">
          Internship
        </h1>
        <div className="flex my-2  ">
          <div className="w-36 "></div>
          <div className="  overflow-auto py-3">
            <PreferenceDatas />
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
