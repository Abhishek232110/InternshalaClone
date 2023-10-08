import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../userSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserLogin({ onClickRegister, onClickLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const select = useSelector((state) => state.app.users);
  const dispatch = useDispatch();
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, []);

  const submitHandle = async (e) => {
    e.preventDefault();
    onClickLogin(e);
    const result = await fetch("http://localhost:9090/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    let data = await result.json();
    console.log(JSON.stringify(data));

    {
      data.name
        ? localStorage.setItem("user", JSON.stringify(data))
        : alert("user not found");
    }
  };

  useEffect(() => {
    getAllUser();
  });
  return (
    <>
      <div className="   ">
        <h1 className="text-2xl font-medium text-center text-violet-500 py-10 ">
          <button>Login Page </button>
        </h1>
        <form className="space-y-10" onSubmit={submitHandle}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="username"
                type="email"
                autoComplete="email"
                required
                className="rounded-md w-72 py-1 outline-none pl-2 shadow-sm"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-violet-500 hover:text-violet-600"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autoComplete="password"
                required
                className="rounded-md w-72 py-1 outline-none pl-2 shadow-sm"
              />
            </div>
          </div>
          <div>
            <button
              onSubmit={submitHandle}
              type="submit"
              className=" p-1  rounded-md w-full bg-violet-400 hover:bg-violet-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <button
            className="font-semibold leading-6 text-violet-500 hover:text-violet-600 pl-2"
            onClick={onClickRegister}
          >
            SignUp
          </button>
        </p>
        <button onClick={() => dispatch(getAllUser())}>AllUser</button>
      </div>
    </>
  );
}
