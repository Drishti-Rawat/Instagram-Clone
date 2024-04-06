import React from "react";
import data from "../Data/data"

function Exploregrid() {
  return (
    <>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1  bg-gray-200 p-4">First Column</div>
      <div className="col-span-1 bg-gray-200 p-4">Second Column</div>
      <div className="col-span-1 row-span-2 bg-gray-200 p-4">Third Column</div>
      <div className="col-span-1  bg-gray-200 p-4">fourth Column</div>
      <div className="col-span-1 bg-gray-200 p-4">fifth Column</div>

      <div className="col-span-1  row-span-2 bg-gray-200 p-4">First Column</div>
      <div className="col-span-1 bg-gray-200 p-4">Second Column</div>
      <div className="col-span-1  bg-gray-200 p-4">Third Column</div>
      <div className="col-span-1  bg-gray-200 p-4">Third Column</div>
      <div className="col-span-1 bg-gray-200 p-4">Fourth Column</div>
      
    </div>
   
    </>
    // <div className="grid grid-cols-3 gap-4 ">
        
    // </div>
  );
}

export default Exploregrid;
