import React from "react";

const Mesagebox = ({profileimg,username,lastText,time}) => {
  return (
    

        <div className=" ">
            <div  className=" flex items-center gap-2  px-2">
                <img src={profileimg} alt="" className="w-14 rounded-full" />
                <div className="flex flex-col gap-1">
                    <div>
                    <h2 className="text-[16px] text-black font-normal">{username}</h2>

                    </div>
                    <div>
                    <h3 className="text-[12px] text-gray-500 flex  items-center gap-2">
                        <span>{lastText}</span>
                        
                        <span>{time}</span>
                    </h3>
                    </div>
                </div>
            </div>
        </div>
     
  );
};

export default Mesagebox;
