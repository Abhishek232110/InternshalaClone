import { useState } from "react";
import UserLogin from "./component/userLogin";
import RegisterPage from "./component/registerForm";
import { useDispatch } from "react-redux";
import { getAllUser, sendAllUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
import laptopWork from "../../assets/laptopWork.jpg";

export default function UserIndex() {
  const [register, setRegister] = useState();
  const dispatch = useDispatch();
  const negative = useNavigate();
  return (
    <>
      <div className="flex ">
        <div className="w-1/2 flex-1 flex justify-center  bg-zinc-100 ">
          {register ? (
            <RegisterPage
              onClickLogin={() => {
                setRegister(false);
              }}
              onClickRegister={(e) => {
                dispatch(sendAllUser(e)).then(() => {
                  // negative("/homePage");
                });
              }}
            />
          ) : (
            <UserLogin
              onClickLogin={(e) => {
                dispatch(getAllUser(e)).then(() => {
                  // negative("/homePage");
                });
              }}
              onClickRegister={() => {
                setRegister(true);
              }}
            />
          )}
        </div>
        <div className=" ">
          <img
            src={laptopWork}
            className="flex w-full items-center  justify-center  h-screen"
          ></img>
        </div>
      </div>
    </>
  );
}
