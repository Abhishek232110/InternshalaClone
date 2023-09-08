import React from "react";

export const InputForm = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center bg-gray-600">
          <div className="max-w-lg w-full mx-auto ">
            <div className="  bg-white">
              <img src="img.png" />
              <h2 className="text-3xl  m-6 ">Login Page</h2>
              <form className="p-5">
                <div className="mb-4">
                  <label for="name" className="block  text-lg font-thin ">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-1  border-b-2 border-gray-400 outline-none "
                    required
                  />
                </div>
                <div className="mb-4">
                  <label for="dob" className="block text-lg font-thin">
                    Enter your age
                  </label>
                  <input
                    type="date"
                    className="w-full mt-1 p-0 border-b-2 border-gray-400 outline-none "
                    required
                  />
                </div>
                <div className="mb-4">
                  <label for="weight" className="block text-lg font-thin">
                    Enter your weight
                  </label>
                  <input
                    type="number"
                    className="w-full mt-1 p-0 border-b-2 border-gray-400 outline-none "
                    required
                  />
                </div>
                <div className="mb-4">
                  <label for="email" className="block text-lg font-thin">
                    Enter your email id
                  </label>
                  <input
                    type="email"
                    className="w-full mt-1 p-0 border-b-2 border-gray-400 outline-none "
                    required
                  />
                </div>
                <div className="mb-4">
                  <label for="dob" className="block text-lg font-thin">
                    upload Health Report
                  </label>
                  <input
                    type="url"
                    className="w-full mt-1 p-0 border-b-2 border-gray-400 outline-none "
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-1/2 bg-blue-950 text-white p-4 text-2xl rounded-full font-semibold"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
