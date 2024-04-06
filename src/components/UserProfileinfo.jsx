import React from "react";

const UserProfileinfo = ({
  profileimg,
  usernmae,
  posts,
  followers,
  follwoing,
  name,
  bio,
}) => {
  return (
    <div className=" flex gap-7  px-16 items-center content-center  ">
      <div className="px-6  ">
        <img
          src={profileimg}
          alt=""
          className="w-40 rounded-full object-contain"
        />
      </div>

      <div className="flex  flex-col gap-4 py-4 ">
        <div className="flex items-center justify-center gap-4 ">
          <span className="text-[24px] font-semibold">{usernmae}</span>
          <div className="flex gap-3">
            <button className="bg-[#efefef]  px-5 py-1.5 rounded-xl">
              Edit Profile
            </button>
            <button className="bg-[#efefef] px-5 py-1.5 rounded-xl">
              View archive
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="23"
            fill="currentColor"
            class="bi bi-gear-wide"
            viewBox="0 0 16 16"
          >
            <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
          </svg>
        </div>

        <div className="flex gap-6 text-[16px]">
          <div>
            {" "}
            <span className=" font-semibold">{posts} </span>posts
          </div>
          <div>
            <span className="font-semibold">{followers}</span> followers
          </div>
          <div>
            {" "}
            <span className="font-semibold">{follwoing}</span> following{" "}
          </div>
        </div>

        <div className="flex flex-col gap-0 content-center">
          <h3 className="text-[13px] font-bold">{name}</h3>
          <div className="">
            <h3 className="text-wrap">{bio}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileinfo;
