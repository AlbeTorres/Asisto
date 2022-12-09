import React,{useContext} from "react";
import worker from "../../assets/noperfil.jpg";
import "../../index.css";
import registroContext from "../../context/registroContext/registroContext";

const TrabajadorCard = ({ nombre, img, carnet, categoria, id }) => {

  const {establecerAccion}= useContext(registroContext)

  const establecerAccionAux=( accion)=>{

    establecerAccion({id, accion })
  }

  return (
    <div className=" md:grid usuario-card h-fit py-4 gap-4   border-gray-200 border-b   ">
      <figure className="h-24 w-24 rounded-md mr-5   ">
        <img
          src={img === "" ? worker : img}
          alt=""
          className="h-full w-full object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col items-start  md:items-center justify-center pl-2">
        <p className="text-gray-500">{nombre}</p>
        <p className="md:hidden text-gray-500">{carnet}</p>
      </div>
      <div className=" hidden md:flex flex-col items-center justify-center pl-2">
        <p className="text-gray-500">{carnet}</p>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center pl-2">
        <p className="text-gray-500">{categoria}</p>
      </div>
      <div className="flex flex-col items-end justify-center ">
        <label
        onClick={()=>establecerAccionAux('modificartrabajador')}
          htmlFor="my-modal"
          className="btn modal-button bg-gray-800 text-white"
        >
          Editar
        </label>
      </div>
    </div>
  );
};

export default TrabajadorCard;
