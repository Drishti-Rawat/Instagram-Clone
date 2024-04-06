import React from "react";

const Story = ({ profileimg, username }) => {
  return (
    <div className=" flex flex-col px-2  justify-center items-center gap-1 ">
      <span>
        <img src={profileimg} alt="" className="w-16 rounded-full" />
      </span>
      <h3 className="text-sm font-semibold">{username}</h3>
    </div>
  );
};

export default Story;
