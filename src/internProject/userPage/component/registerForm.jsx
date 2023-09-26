import { useState } from "react";

export default function RegisterPage({ onClickLogin, onClickRegister }) {
  const [form, setForm] = useState();

  const submitHandle = (e) => {
    e.preventDefault();
    onClickRegister(e);
    // const response = await fetch("http://localhost:8000/", {
    //   method: "POST",
    //   body: JSON.stringify(form),
    //   headers: {
    //     Authorization: "Bearer YOUR_TOKEN",
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json();
    // return data;
  };

  const eventHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const mystyle = {
    // backgroundColor: "",
    padding: "20px",
    fontFamily: "Arial",
    image: "laptopWork.jpg",
  };
  return (
    <>
      <div className="   ">
        <h1 className="text-2xl font-medium text-center py-10 ">
          <span>SignUp Here </span>
        </h1>
        <form
          className="space-y-7"
          action="#"
          method="POST"
          onSubmit={submitHandle}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              onChange={eventHandler}
              name="username"
              type="text"
              autoComplete="username"
              required
              className="rounded-md  w-72  py-1 outline-none pl-2 shadow-sm mt-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <input
              onChange={eventHandler}
              name="useremail"
              type="email"
              autoComplete="email"
              required
              className="rounded-md w-72 py-1 outline-none pl-2 shadow-sm mt-2"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
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
              onSubmit={() => {}}
              type="submit"
              className=" p-1  rounded-md w-full bg-indigo-400 hover:bg-indigo-500"
            >
              submit
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          You are a member?
          <button
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-2"
            onClick={onClickLogin}
          >
            SignUp
          </button>
        </p>
        {/* <button onClick={() => dispatch(getAllUser())}>AllUser</button> */}
      </div>
    </>
  );
}
