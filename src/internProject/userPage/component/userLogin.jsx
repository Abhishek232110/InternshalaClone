import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../userSlice";
import { Link } from "react-router-dom";

export default function UserLogin({ onClickRegister, onClickLogin }) {
  const [form, setForm] = useState();

  const select = useSelector((state) => state.app.users);

  const dispatch = useDispatch();
  const submitHandle = async (e) => {
    e.preventDefault();
    onClickLogin(e);
    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        // Authorization: "Bearer YOUR_TOKEN",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
  };

  const eventHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="   ">
        <h1 className="text-2xl font-medium text-center py-10 ">
          <button>Login Page </button>
        </h1>
        <form
          className="space-y-10"
          action="#"
          method="POST"
          onSubmit={submitHandle}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={eventHandler}
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
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                onChange={eventHandler}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="rounded-md w-72 py-1 outline-none pl-2 shadow-sm"
              />
            </div>
          </div>
          <div>
            <button
              onSubmit={submitHandle}
              type="submit"
              className=" p-1  rounded-md w-full bg-indigo-400 hover:bg-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <button
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-2"
            onClick={onClickRegister}
          >
            SignUp
          </button>
        </p>
        {/* <button onClick={() => dispatch(getAllUser())}>AllUser</button> */}
        <Link to="index">
          <button className=" w-full text-center bg-violet-500 py-1 rounded-md mt-5">
            Go To HomePage
          </button>
        </Link>
      </div>
    </>
  );
}
