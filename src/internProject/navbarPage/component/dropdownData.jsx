export default function DropdownData() {
  return (
    <>
      <div className="">
        <a
          className=" dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Internships
        </a>

        <ul className="dropdown-menu mt-4 " aria-labelledby="dropdownMenuLink">
          <div className="flex justify-between">
            <div className=" grid gap-y-3">
              <div className="bg-indigo-300 w-56"></div>
              <a
                href=""
                className="w-52 pl-2 py-2 rounded-e-3xl px hover:bg-sky-100"
              >
                Top Location
              </a>
              <a
                href=""
                className="w-52 pl-2 rounded-e-3xl py-2 hover:bg-sky-100"
              >
                Profile
              </a>
              <a
                href=""
                className="w-52 pl-2 rounded-e-3xl py-2 hover:bg-sky-100"
              >
                {" "}
                Top Categeries
              </a>
              <a
                href=""
                className="w-52 pl-2 rounded-e-3xl py-2 hover:bg-sky-100"
              >
                Explore More Internships
              </a>
              <a
                href=""
                className="w-52 pl-2 rounded-e-3xl py-2 hover:bg-sky-100"
              >
                Placement Gaurantee Courses
              </a>
            </div>
            <div className="border-l-2"></div>
            <div className="w-64">
              <h1>,as dm,</h1>{" "}
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
