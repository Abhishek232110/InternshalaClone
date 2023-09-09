import React from "react";
import { IndexPage } from "../../internProject";

export const NavbarPage = () => {
  return (
    <>
      <div className="flex shadow-sm p-3 text-base">
        <div className="pl-12">
          <a href="">
            <img className="w-28 " src="internshala-1.jpg" alt="logo" />
          </a>
        </div>
        <div className="w-2/5 "></div>
        <div className="flex  space-x-12 pt-2">
          <div className="">
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

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="img.png">
                  Action
                </a>
                <a className="dropdown-item" href="">
                  Another action
                </a>

                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </ul>
            </div>
          </div>
          <div className="">
            {" "}
            <div className="">
              <a
                className=" dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cources
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="img.png">
                  Action
                </a>
                <a className="dropdown-item" href="">
                  Another action
                </a>

                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="">
              <a
                className=" dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Jobs
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="img.png">
                  Action
                </a>
                <a className="dropdown-item" href="">
                  Another action
                </a>

                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </ul>
            </div>
          </div>
          <a href="">
            <button>Clubs</button>
          </a>

          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bookmarks"
              viewBox="0 0 16 16"
            >
              <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
              <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
            </svg>{" "}
          </a>

          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-left-dots"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>
          <a href=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
