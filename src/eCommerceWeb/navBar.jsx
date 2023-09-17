import React from "react";

export default function NavBar(props) {
  let a = "abhi";
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-zinc-200">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            Ecommerce
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex space-x-1 ">
            <input
              className="p-2 outline-none rounded-md "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="px-4 bg-indigo-300 rounded-md" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
