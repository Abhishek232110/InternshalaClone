import { BookmarksOutlined, MessageOutlined } from "@mui/icons-material";
import UserInformation from "../../userPage/component/userInfo";
import { Link, useNavigate } from "react-router-dom";
import DropdownData from "./dropdownData";

export default function HeaderPage({ openModel }) {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className="flex shadow-md p-3 text-base">
        <div className="pl-12">
          <a href="">
            <img className="w-28 " src="internshala-1.jpg" alt="logo" />
          </a>
        </div>

        <div className="w-2/5 "></div>
        <div className="flex  space-x-12 pt-2">
          <button onClick={logout}>logout</button>
          <div className="">
            <DropdownData />
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
                Cources
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="img.png">
                  Action
                </a>
                <a className="dropdown-item" href="">
                  Another action<li className="pl-10">sdnjk</li>
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
          <a href="">Clubs</a>
          <Link to="databox">
            <BookmarksOutlined></BookmarksOutlined>
          </Link>
          <Link to="userMessage">
            <MessageOutlined></MessageOutlined>
          </Link>
          <UserInformation></UserInformation>
        </div>
      </div>
      <div></div>
    </>
  );
}
