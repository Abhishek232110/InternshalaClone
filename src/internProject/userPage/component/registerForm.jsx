import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function RegisterPage({ onClickLogin, onClickRegister }) {
  const [form, setForm] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    onClickRegister(e);
    axios
      .post("http://localhost:4001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/homePage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="   ">
        <h1 className="text-2xl font-medium text-center py-10 text-violet-500 ">
          <span>SignUp Here </span>
        </h1>
        <form className="space-y-7" onSubmit={submitHandle}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              type="text"
              required
              className="rounded-md  w-72  py-1 outline-none pl-2 shadow-sm mt-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="useremail"
              type="email"
              required
              className="rounded-md w-72 py-1 outline-none pl-2 shadow-sm mt-2"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                type="password"
                // autoComplete="current-password"
                required
                className="rounded-md w-72 py-1 outline-none pl-2 shadow-sm"
              />
            </div>
          </div>
          <div>
            <button
              onSubmit={() => {}}
              type="submit"
              className=" p-1  rounded-md w-full bg-violet-400 hover:bg-violet-500"
            >
              submit
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          You are a member?
          <button
            className="font-semibold leading-6 text-violet-400 hover:text-violet-500 pl-2"
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
