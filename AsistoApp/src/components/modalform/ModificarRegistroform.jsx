import React,{useEffect, useContext} from "react";
import Modal from "../modal/Modal";
import NavComponent from "../navbar/NavComponent";
import CrearRegistroFormList from "../registro/CrearRegistroFormList";
import TrabajadorRegistroCard from "../usuario/TrabajadorRegistroCard";
import registroContext from "../../context/registroContext/registroContext";
import { Link } from "react-router-dom";

const ModificarRegistroform = () => {


  const {accion, establecerAccion}=useContext(registroContext);
  const establecerAccionAux=(accion)=>{

    establecerAccion({accion})
  }

  useEffect(()=>{

  },[])

  return (
    <div className="w-full">
      <NavComponent />
      <h3 className="font-bold text-lg m-5 ">Modificar Registro</h3>
      <div className=" mt-5  md:place-items-center md:grid  md:grid-cols-2 md:gap-4 px-2  ">
        <div className="flex flex-col items-center justify-between gap-4 mb-5 w-full">
          <input className="w-fit text-xl my-5 " type="date" name="" id="" />
          <label htmlFor="my-modal" onClick={()=>{establecerAccionAux('scanner')}} className="btn btn-secondary w-1/4 ">Scanner</label>
        </div>
        <div className="h-80 my-5">
          <CrearRegistroFormList>
            <TrabajadorRegistroCard />
            <TrabajadorRegistroCard />
            <TrabajadorRegistroCard />
            <TrabajadorRegistroCard />
            <TrabajadorRegistroCard />
          </CrearRegistroFormList>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8  w-full">
        <Link to={'/'} className="btn mr-5 ">
          Cancelar
        </Link>
        <button  className="btn btn-primary">
          Aceptar
        </button>
      </div>
      <Modal/>
    </div>
  );
};

export default ModificarRegistroform;
