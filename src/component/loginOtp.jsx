import React from "react";

const LoginOtp = () => {
  return (
    <>
      <hr />
      <div className="flex items-center justify-center bg-gray-600">
        <div className="max-w-lg w-full mx-auto ">
          <div className="  bg-white">
            <img src="img.png" />
            <h2 className="text-3xl  m-6 ">
              Login using your registered mobile number
            </h2>
            <form className="p-5">
              <div className="mb-4">
                <label for="phone" className="block  text-lg font-thin ">
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  className="w-full px-3 p-2  border-b-2 border-gray-400 outline-none "
                  required
                />
              </div>
              <div className="mb-4">
                <label for="dob" className="block text-lg font-thin ">
                  Date Of Birth*
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2    border-b-2 border-gray-400 outline-none "
                />
              </div>
              <div className="mb-4 font-medium">
                <label for="phone" className="block  text-lg font-thin ">
                  OTP *
                </label>
                <input
                  type="tel"
                  className="w-full px-3 p-2  border-b-2 border-gray-400 outline-none "
                  placeholder="XXXXXX"
                />
                <span>
                  If you do not receive the OTP in 60 seconds, Click Resend
                </span>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-1/2 bg-blue-950 text-white p-4 text-2xl font-semibold rounded-full"
                >
                  Submit
                </button>
              </div>
              <span>
                I provide my consent and agree to the Terms and conditions
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOtp;
