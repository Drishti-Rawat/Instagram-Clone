import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Forgotpass() {
  const [text, setText] = useState();

  //here comes the tar yoiiii
  // review kr le jo bnaya hai hahahah
  //which one
  //

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section className="flex flex-col justify-center items-center py-10 gap-0 ">
      <div className="border border-gray-300  flex flex-col gap-4 items-center justify-center  ">
        <div className="flex flex-col items-center px-12 pt-6 mb-14 gap-5">
        <span className="self-center border-2 border-gray-600 p-5 rounded-full ">
          <svg
            className="w-[70px] h-[70px] fill-gray-600"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
          </svg>
        </span>
        <div className="flex flex-col justify-center items-center">
          <h2 className=" font-semibold">Trouble Logging in?</h2>
          <h3 className="flex flex-col items-center justify-center text-sm text-gray-500 ">
            <span>Enter your email, phone, or username and we'll</span>
            <span>send you a link to get back into your account.</span>{" "}
          </h3>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <form className="flex flex-col gap-3  ">
            <div class="relative z-0 w-full  group">
              <input
                type="email"
                value={text}
                onChange={handleInputChange}
                className=" py-2.5 px-4 w-full text-[12px] bg-zinc-100 text-gray-900 border  border-gray-300 outline-none peer rounded-xl "
              />
              <label className="pointer-events-none absolute text-sm peer-focus:text-[10px] text-gray-500  duration-300 transform  top-1.5 left-4 peer-focus:-translate-y-2  ">
                Email, Phone, or Username
              </label>
            </div>

            <button
              disabled={!text}
              className={`bg-[#0095f6]  text-white disabled:bg-blue-300 disabled:text-white font-semibold py-1.5 px-2 rounded-lg`}
            >
              Send Login Link
            </button>
            <h3 className="self-center text-xs text-blue-800">
              <a href="https://help.instagram.com/374546259294234">
                Can't reset your password?
              </a>
            </h3>
          </form>

          <div className="flex flex-row items-center justify-center gap-2 pt-3">
            <span className="bg-[#dbdbdb] px-16 py-[1px]"></span>
            <h3 className="text-xs font-semibold text-gray-500">OR</h3>
            <span className="bg-[#dbdbdb] px-16 rounded-full py-[1px]"></span>
          </div>
          <h3 className="self-center text-sm font-semibold hover:text-gray-500 ">
            <Link to="/Signup">Create new account</Link>
          </h3>
        </div>
        </div>
        
      <div className=" w-full text-center border border-t-gray-300 py-3 bg-gray-50 border-gray-200">
        <span className="text-sm  text-gray-700 font-semibold hover:text-gray-400 cursor-pointer">
          <Link to="/">Back to Login</Link>
        </span>
      </div>
      </div>
    </section>
  );
}

export default Forgotpass;
