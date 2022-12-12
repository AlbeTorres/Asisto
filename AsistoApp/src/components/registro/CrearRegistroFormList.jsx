import React from 'react'
import {FaTrash} from "react-icons/fa";

const CrearRegistroFormList = ({children}) => {
  return (
    <div className="grid  h-full  md:items-start gap-6 mt-2 auto-rows-min md:place-items-start  w-full overflow-y-scroll     ">
       
       
       {children}
       
       
       
      </div>
  )
}

export default CrearRegistroFormList