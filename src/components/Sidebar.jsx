import React from "react";
import Logo from "../assets/logo1.jpg";
import profileimg from "../assets/profileimg.jpg"
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <section className="flex flex-col gap-5 bg-[#fafafa]  border-r-2  px-5 ">
      <Link to="/Home"><div className=" flex flex-col pt-3">
        <img src={Logo} alt="" className="w-28" />
      </div></Link>
       
      <div className="flex flex-col gap-2 py-2  px-1">
         <Link to="/Home"><div className="flex justify-start items-center gap-2 py-3 pr-32 pl-1 hover:bg-zinc-200  rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="25"
            viewBox="0 0 48 48"
          >
            <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
          </svg>
         
            <span className="text-[17px] font-[400] ">Home</span>
          
        </div></Link>

        <div className="flex justify-start items-center gap-2 py-3  pl-1 hover:bg-zinc-200  rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            className="bi bi-search font-bold"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <Link>
            <span className="text-[17px] font-[400] ">Search</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 py-3 pl-1 hover:bg-zinc-200  rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            class="bi bi-compass"
            viewBox="0 0 16 16"
          >
            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
          </svg>
          <Link>
            <span className="text-[17px] font-[400] ">Explore</span>
          </Link>
        </div>

        <div className=" flex items-center gap-2 py-3 pl-1  hover:bg-zinc-200  rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 35 C 4 41.063407 8.9365932 46 15 46 L 35 46 C 41.063407 46 46 41.063407 46 35 L 46 15 C 46 8.9365932 41.063407 4 35 4 L 15 4 z M 16.740234 6 L 27.425781 6 L 33.259766 16 L 22.574219 16 L 16.740234 6 z M 29.740234 6 L 35 6 C 39.982593 6 44 10.017407 44 15 L 44 16 L 35.574219 16 L 29.740234 6 z M 14.486328 6.1035156 L 20.259766 16 L 6 16 L 6 15 C 6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18 L 44 18 L 44 35 C 44 39.982593 39.982593 44 35 44 L 15 44 C 10.017407 44 6 39.982593 6 35 L 6 18 z M 21.978516 23.013672 C 20.435152 23.049868 19 24.269284 19 25.957031 L 19 35.041016 C 19 37.291345 21.552344 38.713255 23.509766 37.597656 L 31.498047 33.056641 C 33.442844 31.951609 33.442844 29.044485 31.498047 27.939453 L 23.509766 23.398438 L 23.507812 23.398438 C 23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328 C 22.158626 24.988232 22.342399 25.035052 22.521484 25.136719 L 30.511719 29.677734 C 31.220922 30.080703 31.220922 30.915391 30.511719 31.318359 L 22.519531 35.859375 C 21.802953 36.267773 21 35.808686 21 35.041016 L 21 25.957031 C 21 25.573196 21.201402 25.267385 21.492188 25.107422 C 21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z"></path>
          </svg>{" "}
          <Link>
            <span className="text-[17px] font-[400] ">Reels</span>
          </Link>
        </div>

        <Link to="/Message">
        <div className=" flex items-center gap-2 py-3 pl-1 hover:bg-zinc-200 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            class="bi bi-chat-dots"
            viewBox="0 0 16 16"
          >
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
          </svg>{" "}
          
            <span className="text-[17px] font-[400] ">Messages</span>
         
        </div>
        </Link> 

        <div className=" flex items-center gap-2 py-3 pl-1 hover:bg-zinc-200 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>{" "}
          <Link>
            <span className="text-[17px] font-[400] ">Notification</span>
          </Link>
        </div>

       

        <div className="flex items-center gap-2 py-3 pl-1  hover:bg-zinc-200 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            class="bi bi-plus-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <Link>
            <span className="text-[17px] font-[400] ">Create</span>
          </Link>
        </div>

       <Link to="/Profile"> <div className=" flex items-center gap-2 py-2 pl-1 hover:bg-zinc-200  rounded-lg">
        <span className='border-2  rounded-full'> <img src={profileimg} alt="" className='h-8 rounded-full' /></span>
          
            <span className="text-[17px] font-[400]">Profile</span>
          
        </div></Link>
      </div>

      <div className="pt-14">
      <div className="flex hover:bg-zinc-200 py-2 pl-1  gap-2 rounded-lg justify-start items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg> 
<span className="text-[17px] font-[400]"> Menu</span>
      </div>
      </div>

    </section>
  );
}

export default Sidebar;
