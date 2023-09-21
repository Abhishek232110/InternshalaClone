import { Link } from "react-router-dom";
export default function UserLogin() {
  return (
    <>
      <div className=" flex justify-between   bg-zinc-50">
        <div> </div>
        <div className="   ">
          <h1 className="text-2xl font-medium text-center py-10 ">
            <Link to="databox">
              <button>Login Page </button>
            </Link>
          </h1>
          <form className="space-y-10" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="rounded-md w-full py-1 outline-none pl-2 shadow-sm"
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
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="rounded-md w-full py-1 outline-none pl-2 shadow-sm"
                />
              </div>
            </div>

            <div>
              <Link to="index">
                <button
                  type="submit"
                  className=" p-1  rounded-md w-full bg-indigo-400 hover:bg-indigo-500"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
        <div className="">
          <img src="business.avif"></img>
        </div>
      </div>
    </>
  );
}
