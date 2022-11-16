import React,{useContext, useState} from "react";
import registroContext from "../../context/registroContext/registroContext";

const CrearRegistro = () => {

  const {crearRegistro}=useContext(registroContext)
  const area= 'nodo'

  const[registro, setRegistro]=useState({
    estado:'en proceso',
    area:'nodo',
    fecha:'10-3-2000'
  })

  const onChange=(e)=>{
    setRegistro({
      ...registro,
      [e.target.name]:e.target.value
    })
  }

  const onSubmit=()=>{
      crearRegistro(registro)
  }

  return (
    <div>
      <h3 className="font-bold text-lg mb-5 ">
        Crear Nuevo Registro
      </h3>
    <div className="grid place-items-center ">

      <div>
        <input type="date" name="" id="" />
      </div>

    </div>
  
      <div className="modal-action">
        <label htmlFor="my-modal" className="btn">
          Cancelar
        </label>
        <label onClick={onSubmit} htmlFor="my-modal" className="btn btn-primary">
         Crear
        </label>
      </div>
    </div>
  );
};

export default CrearRegistro;
