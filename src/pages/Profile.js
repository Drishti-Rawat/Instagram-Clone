import React from "react";
import Sidebar from "../components/Sidebar";
import profileimg from "../assets/profileimg.jpg";
import UserProfileinfo from "../components/UserProfileinfo";
import HighlightStory from "../components/HighlightStory";
import Posts from "./Posts";
import postimg from "../assets/Postimg.jpeg";
import postimg2 from "../assets/post2.jpeg";

const Profile = () => {
  

  return (
    <section className="    bg-[#fafafa] ">
      <div className="flex justify-between">
        <div className="border     ">
          <Sidebar />
        </div>

        <div className="px-40">

        

        <div className=" px-2 flex flex-col gap-10  py-7  ">
          <div className=" flex flex-col gap-10">
            {/* userprofleinfo */}
            <div className=" ">
              <div className="">
                <UserProfileinfo
                  profileimg={profileimg}
                  usernmae="_apriicus"
                  posts="6"
                  follwoing="200"
                  followers="3"
                  name="DRISHTI"
                  bio="hehehe jd jnc svnjhdv sjvdhv dsjnvjs vj bhfsb"
                />
              </div>
            </div>

            <div className=" flex px-7">
              <HighlightStory />
              <HighlightStory />
              <HighlightStory />
              <HighlightStory />
              <HighlightStory />
              <HighlightStory />
              <HighlightStory />
              
            </div>

            {/* post */}

            <div className=" ">
              <div className="flex justify-center items-center gap-12 py-3 text-[15px] border-t-2">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-grid-3x3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5V5h4V1zM5 6H1v4h4zm1 4h4V6H6zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4v-4zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11zm0-1h4V6h-4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11zm-1 0V1H6v4z" />
                  </svg>
                  <span>POSTS</span>
                </div>
                <div className="flex items-center gap-1">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="20"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 35 C 4 41.063407 8.9365932 46 15 46 L 35 46 C 41.063407 46 46 41.063407 46 35 L 46 15 C 46 8.9365932 41.063407 4 35 4 L 15 4 z M 16.740234 6 L 27.425781 6 L 33.259766 16 L 22.574219 16 L 16.740234 6 z M 29.740234 6 L 35 6 C 39.982593 6 44 10.017407 44 15 L 44 16 L 35.574219 16 L 29.740234 6 z M 14.486328 6.1035156 L 20.259766 16 L 6 16 L 6 15 C 6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18 L 44 18 L 44 35 C 44 39.982593 39.982593 44 35 44 L 15 44 C 10.017407 44 6 39.982593 6 35 L 6 18 z M 21.978516 23.013672 C 20.435152 23.049868 19 24.269284 19 25.957031 L 19 35.041016 C 19 37.291345 21.552344 38.713255 23.509766 37.597656 L 31.498047 33.056641 C 33.442844 31.951609 33.442844 29.044485 31.498047 27.939453 L 23.509766 23.398438 L 23.507812 23.398438 C 23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328 C 22.158626 24.988232 22.342399 25.035052 22.521484 25.136719 L 30.511719 29.677734 C 31.220922 30.080703 31.220922 30.915391 30.511719 31.318359 L 22.519531 35.859375 C 21.802953 36.267773 21 35.808686 21 35.041016 L 21 25.957031 C 21 25.573196 21.201402 25.267385 21.492188 25.107422 C 21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z"></path>
                  </svg>
                  <span>REELS</span>
                </div>
                <div className="flex  items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bookmark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                  </svg>
                  <span>SAVED</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                  </svg>
                  <span>TAGGED</span>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-1">
                <div class="bg-gray-200 ">
                  <img src={postimg} alt="" className="w-80" />
                </div>
                {/* <div class="bg-gray-200 ">
                  <img src={postimg} alt="" className="w-80" />
                </div>
                <div class="bg-gray-200 ">
                  <img src={postimg} alt="" className="w-80" />
                </div>
                <div class="bg-gray-200 ">
                  <img src={postimg} alt="" className="w-80" />
                </div>
                <div class="bg-gray-200 ">
                  <img src={postimg} alt="" className="w-80" />
                </div>
                <div class="bg-gray-200 ">
                  <img src={postimg} alt="" className="w-80" />
                </div>
                <div class="bg-gray-200 ">
                  <img src={postimg} alt="" className="w-80" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Profile;
