import React from "react";
import Messagebox from "../components/Mesagebox";
import profileimg from "../assets/profileimg.jpg";
import MsgNavbar from "../components/MsgNavbar";
import Chatbox from "../components/Chatbox";

const Message = () => {
  return (
    <section className="flex h-[100vh] overflow-hidden">
      <div className="fixed ">
        <MsgNavbar profileimg={profileimg} />
      </div>

      <div className=" py-7 ml-[70px]">
        <div className="flex flex-col gap-5">
          <div className="flex  justify-between items-center gap-52 px-6 ">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-[24px] font-semibold">_apriicus</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down "
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between px-5 ">
              <h3 className="text-[17px] font-semibold">Messages</h3>
              <span className="text-[15px] text-gray-500 font-semibold">
                Requests
              </span>
            </div>

            <div className="flex flex-col gap-4 pl-2 max-h-[80vh] overflow-y-scroll  ">
              <Messagebox
                profileimg={profileimg}
                username="nitin"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="nitin"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="nitin"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="nitin"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="nitin"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an a hfhfh jhfv ttachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="hello"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti"
                lastText="drishti sent an attachment."
                time="1h"
              />
              <Messagebox
                profileimg={profileimg}
                username="drishti okk"
                lastText="drishti sent an attachment."
                time="1h"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" border flex justify-center items-center grow">
        <Chatbox />
      </div>
    </section>
  );
};

export default Message;
