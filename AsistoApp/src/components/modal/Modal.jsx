import React from 'react'
import CrearRegistro from '../../components/modalform/CrearRegistro'
import ModificarRegistroform from '../modalform/ModificarRegistroform'

const Modal = () => {

  // const accion={accion:"crearproducto"}
  const accion={accion:"modificar"}
  return (
    <div>
    <input type="checkbox" id="my-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
      {accion?.accion === "crearproducto" &&
          <div className="w-full flex items-center justify-center ">
          <CrearRegistro/>
          </div>}
      {accion?.accion === "modificar" &&
          <div className="w-full flex items-center justify-center ">
          <ModificarRegistroform/>
          </div>}
        
      </div>
    </div>
    </div>
  )
}

export default Modal