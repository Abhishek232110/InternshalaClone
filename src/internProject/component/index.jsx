import DataBox from "./components/dataBox";

export default function DataboxIndex() {
  return (
    <>
      <div className="flex  ">
        <div className="w-36 "></div>
        <div className="  overflow-x-auto py-3">
          <DataBox />
        </div>
        <div className="w-36  "></div>
      </div>
    </>
  );
}
