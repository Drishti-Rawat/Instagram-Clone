import React, { useState, useEffect } from "react";
import phone_img from "../assets/img.jpg";
import logo from "../assets/logo1.jpg";
import gplay from "../assets/gplay.jpg";
import microsoft from "../assets/microsoft.jpg";
import { Link } from "react-router-dom";

const phnbg1 = require("../assets/phnbg1.png");
const phnbg2 = require("../assets/phnbg2.png");
const phnbg3 = require("../assets/phnbg3.png");
const phnbg4 = require("../assets/phnbg4.png");

const Login = () => {
  const [bgIndex, setBgIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex % 4) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="flex justify-center gap-3 py-10  bg-[#fafafa]">
      <div className="relative  ">
        <div className=" relative  overflow-hidden">
          <img src={phone_img} alt="" />
        </div>
        <div>
          <img
            src={eval(`phnbg${bgIndex}`)}
            alt="nothing"
            className="absolute top-[23px] right-[63px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className=" border border-[#dbdbdb] bg-[#fafafa]  flex  flex-col  items-center py-6 ">
          <div>
            <img src={logo} alt="" className="w-48 cursor-pointer" />
          </div>
          <div className=" flex flex-col px-10  gap-5  ">
            <form className="flex flex-col gap-3  ">
              <div class="relative z-0 w-full  group">
                <input
                  type="email"
                  className="  py-3 px-4 w-full text-[12px] bg-zinc-100 text-gray-900 border  border-gray-300 outline-none peer "
            
                />
                <label
                  className="pointer-events-none absolute text-[12px] peer-focus:text-[10px] text-gray-500  duration-300 transform  top-3 left-4 peer-focus:-translate-y-2  "
                >
                  Phone number, username or email
                </label>
              </div>

              <div class="relative z-0 w-full  group">
                <input
                  type="password"
                  className=" py-3 px-4 w-full text-[12px] bg-zinc-100 text-gray-900 border  border-gray-300 outline-none peer "
            
                />
                <label
                  className=" pointer-events-none  absolute text-[12px] peer-focus:text-[10px] text-gray-500  duration-300 transform  top-3 left-4 peer-focus:-translate-y-2  "
                >
                  Password
                </label>
              </div>

              <button className="bg-[#0095f6]  px-4 rounded-lg py-1.5 font-bold text-white ">
               <Link to= "/Home"> Log in</Link>
              </button>
            </form>

            <div className="flex flex-row items-center justify-center gap-1">
              <span className="bg-[#dbdbdb]  rounded-full px-16 py-[1px]"></span>
              <div className="mx-3 text-gray-500 font-semibold text-sm">OR</div>
              <span className="bg-[#dbdbdb] px-16 rounded-full py-[1px] "></span>
            </div>

            <div className="self-center">
              <button className=" flex gap-1 items-center px-2 py-1 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#3F51B5"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                  ></path>
                </svg>
                <span className="text-blue-900 font-semibold text-md">
                  Log in with Facebook
                </span>
              </button>
            </div>

            <h3 className="text-blue-900 text-sm self-center cursor-pointer">
              <Link to="/Forgotpass">Forgot password?</Link>
            </h3>
          </div>
        </div>

        <div className="flex border justify-center py-5 gap-1">
          <h3 className="text-black text-md">Don't have an account?</h3>
          <span className="text-[#0095f6] font-semibold cursor-pointer"><Link to="/Signup">Sign up</Link></span>
        </div>
        <div className="self-center flex flex-col gap-2">
          <span className="text-center">Get the app.</span>
          <div className="flex gap-3 ">
            <img src={gplay} alt="" className="w-36 h-11 rounded-lg cursor-pointer" />
            <img src={microsoft} alt="" className="w-32 h-11 rounded-lg cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
