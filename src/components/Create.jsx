// import React from "react";

function Create({  onClose }) {
  
  // const [openBox, setOpenBox] = useState(false);
    const handleClose = (event) => {
      event.stopPropagation();
      console.log("ayush");
      onClose() // Call the onClose function here
      };
  return (
    <div className={`fixed inset-0 z-50 `}>
      <div className="flex items-center justify-center h-full bg-gray-800 bg-opacity-50 ">
        <div className="bg-white rounded-2xl w-[500px] ">
           
          <div className="flex flex-col gap-9    ">
            {/* <button onClick={onClose}>&times;</button> */}
            <div className="border-b-2  py-2 px-6  flex  justify-between items-center ">
             
                <h3 className=" px-36 text-lg font-semibold">Create new Post</h3>
              
              
                <button className="text-2xl" onClick={handleClose}>x</button>
              
            </div>

            <div className="flex flex-col justify-center items-center  py-36 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                class="bi bi-image"
                viewBox="0 0 16 16"
              >
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
              </svg>
              <h3 className="text-2xl font-[400]">
                Drag Phots and Videos here
              </h3>
              <button className="bg-blue-400 rounded-lg  text-white font-semibold px-4 py-1.5">
                Select from computer
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Create;
