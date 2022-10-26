import React from "react";
import TrabajadorCard from "./TrabajadorCard";

const TrabajadorList = () => {
  return (
    <div>

    <div>
    <label className='btn w-52 bg-gray-800  text-center flex mb-5 mx-auto'>Añadir Trabajador</label>
    </div>
      <div className="bg-gray-800 grid grid-cols-1 h-10 place-items-center rounded-t-md ">
        <p className="text-white ">Trabajadores del area</p>
      </div>
      <TrabajadorCard/>
      <TrabajadorCard/>
      <TrabajadorCard/>
      <TrabajadorCard/>
      <TrabajadorCard/>
      <TrabajadorCard/>
      <TrabajadorCard/>
      
    </div>
  );
};

export default TrabajadorList;
