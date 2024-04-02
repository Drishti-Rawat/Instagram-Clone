import React from 'react'
import logo from "../assets/logo1.jpg";
import gplay from "../assets/gplay.jpg"
import microsoft from "../assets/microsoft.jpg"
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <section className='flex flex-col justify-center items-center py-5 gap-2 bg-[#fafafa]'>
        <div className='border flex flex-col items-center px-3 pb-6'>
            <div className='pt-2'>
                <img src={logo} alt="" className='w-44  cursor-pointer ' />
            </div>
            <div className='flex flex-col px-6 gap-4 pb-3' >
                <h2 className='flex  flex-col items-center text-gray-500 text-md font-semibold  '><span>Sign up to see photos and videos</span><span>from your friends.</span> </h2>
                <button className='flex bg-[#0095f6] rounded-lg py-2  gap-1 justify-center content-center px-9 cursor-pointer'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    >
                    <path
                        fill="#FFFFFF"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                        fill="#3F51B5"
                        d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                    ></path>
                    </svg>
                    <span className="text-white font-semibold text-sm">
                    Log in with Facebook
                    </span>
                </button>

                <div className='flex flex-row items-center justify-center gap-2'>
                    <span className='bg-[#dbdbdb] px-16 py-[1px]'></span>
                    <h3>OR</h3>
                    <span className='bg-[#dbdbdb] px-16 rounded-full py-[1px]'></span>
                </div>

                <div className='flex flex-col '>
                    <form action="" className='flex flex-col gap-2'>
                        <input type="text" placeholder='Mobile Number or Email ' className=' outline-none py-2 px-3  text-[12px] bg-zinc-100  text-gray-900 border focus:border-zinc-600 border-gray-300' />
                        <input type="text" placeholder='Full Name ' className=' outline-none py-2 px-3 text-[12px] bg-zinc-100 text-gray-900 border focus:border-zinc-600  border-gray-300' />
                        <input type="text" placeholder='Username ' className=' outline-none py-2 px-3 text-[12px] bg-zinc-100 text-gray-900 border focus:border-zinc-600  border-gray-300' />
                        <input type="text" placeholder='Password' className='outline-none py-2 px-3  text-[12px] bg-zinc-100 text-gray-900 border focus:border-zinc-600  border-gray-300' />
                    </form>
                </div >

                <div className='flex flex-col px-1 gap-4'>
                <h3 className='flex flex-col items-center text-xs text-gray-500 '>
                    <span>People who use our service may have uploaded</span>
                    <span>your contact information to Instagram.</span>
                    <span className='text-blue-900 cursor-pointer'><a href="https://www.facebook.com/help/instagram/261704639352628" >Learn More</a></span>
                </h3>
                <h3 className='flex flex-col items-center text-xs text-gray-500 '>
                    <span>By signing up, you agree to our <span className='text-blue-900 cursor-pointer'><a href="https://help.instagram.com/581066165581870/?locale=en_US" target='_blank'> Terms</a>,<a href="https://www.facebook.com/privacy/policy" target='_blank'>Privacy</a>  </span></span><span className='text-blue-900 cursor-pointer' ><a href="https://www.facebook.com/privacy/policy" target='_blank'>Policy</a> and <a href="https://privacycenter.instagram.com/policies/cookies/" target='_blank'>Cookies Policy</a> .</span>
                </h3>
                </div>

                <button type="submit" className='bg-[#0095f6] rounded-lg text-sm py-1.5 text-white font-semibold cursor-pointer'>Sign Up</button>


            </div>
            
        </div>
        <div className='border flex  justify-center py-5 px-[107px] gap-1 text-sm '>
                <span>Have an account?</span>
                <span className='text-[hsl(204,49%,71%)] font-semibold  cursor-pointer'><Link to="/">Log in</Link></span>
        </div>
        <div className="self-center flex flex-col gap-2">
          <span className="text-center">Get the app.</span>
          <div className="flex gap-3 ">
            <img src={gplay} alt="" className="w-36 h-11 rounded-lg cursor-pointer" />
            <img src={microsoft} alt="" className="w-32 h-11 rounded-lg cursor-pointer" />
          </div>
        </div>

    </section>
  )
}

export default Signup
