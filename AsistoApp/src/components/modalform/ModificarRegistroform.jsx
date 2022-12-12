import React,{useEffect, useContext} from "react";
import Modal from "../modal/Modal";
import NavComponent from "../navbar/NavComponent";
import CrearRegistroFormList from "../registro/CrearRegistroFormList";
import TrabajadorRegistroCard from "../usuario/TrabajadorRegistroCard";
import registroContext from "../../context/registroContext/registroContext";
import { Link } from "react-router-dom";
import '../../index.css'

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
      <div className=" mt-5 md:items-stretch md:justify-items-stretch   md:grid  md:grid-cols-2 md:gap-4 px-2  ">
        <div className="flex flex-col items-center  gap-4 mb-5 w-full">
          <input className="w-48 text-center cursor-pointer     text-xl my-5 bg-base-300  rounded-md p-4 text-white   " type="date" name="" id="" />
          <label htmlFor="my-modal" onClick={()=>establecerAccionAux('addtrabajadores')} className="btn rounded-md w-48" >Añadir Trabajador</label>
        </div>
        <div className="h-96 md:h-80 my-5">
          <CrearRegistroFormList>
            <TrabajadorRegistroCard />
            <TrabajadorRegistroCard />
            <TrabajadorRegistroCard />
            <TrabajadorRegistroCard />
            <TrabajadorRegistroCard />
          </CrearRegistroFormList>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8  md:w-3/4 mx-auto md:justify-end mb-5 ">
        <Link to={'/'} className="btn mr-5 ">
          Cancelar
        </Link>
        <button  className="btn ">
          Aceptar
        </button>
      </div>
      <Modal/>
    </div>
  );
};

export default ModificarRegistroform;
