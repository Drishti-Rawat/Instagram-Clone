import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Suggestion from "../components/Suggestion";
import PostSection from "../components/PostSection";

const Home = () => {
  return (
    <section className="flex justify-between   overflow-hidden">
      <div className="flex justify-between  bg-[#fafafa] ">
        <div className="   px-2 py-2 mr-6 ">
          <Sidebar />
        </div>

        
          <div className="flex  justify-center gap-4 ml-[200px] border px-16 ">
            <div className="flex flex-col   ">
              <div className="px-12">
                <Header />
              </div>

              <div>
                <PostSection />
              </div>
            </div>

            <div>

            
              <div className=" px-2  py-6">
                <Suggestion />
              </div>

              </div>
          
          </div>
        </div>
    
    </section>
  );
};

export default Home;
