import React,{useContext, useEffect} from "react";
import TrabajadorCard from "./TrabajadorCard";
import trabajadorContext from '../../context/trabajadorContext/trabajadorContext'
import registroContext from "../../context/registroContext/registroContext";

const TrabajadorList = () => {

  const {trabajadores, obtenerTrabajadores}= useContext(trabajadorContext);
  const {establecerAccion}=useContext(registroContext)

  useEffect(()=>{
    obtenerTrabajadores();
  },[])

  const establecerAccionAux=(accion)=>{

    establecerAccion({accion})
  }

  return (
    <div>

    <div>
    <label htmlFor="my-modal"  onClick={()=>establecerAccionAux('creartrabajador')} className='btn w-52 bg-gray-800  text-center flex mb-5 mx-auto'>Añadir Trabajador</label>
    </div>
      <div className="bg-gray-800 grid grid-cols-1 h-10 place-items-center rounded-t-md ">
        <p className="text-white ">Trabajadores del area</p>
      </div>
      { trabajadores.length!==0 ?  trabajadores.map(trabajador=> <TrabajadorCard  key={trabajador._id} id={trabajador._id} nombre={trabajador.nombre} img={trabajador.img} carnet={trabajador.carnet} categoria={trabajador.categoria}    />):
      <h1>No hay trabajadores en el sistema</h1>
      }
      
      
      
    </div>
  );
};

export default TrabajadorList;
