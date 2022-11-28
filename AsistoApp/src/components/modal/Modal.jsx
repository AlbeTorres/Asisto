import React from 'react'
import CrearRegistro from '../../components/modalform/CrearRegistro'
import ModificarRegistroform from '../modalform/ModificarRegistroform'
import ScannerComponent from '../scanner/ScannerComponent'

const Modal = () => {

  // const accion={accion:"crearproducto"}
  const accion={accion:"crear"}
  return (
    <div>
    <input type="checkbox" id="my-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
      {accion?.accion === "crear" &&
          <div className="w-full flex items-center justify-center ">
          <CrearRegistro/>
          </div>}
      {accion?.accion === "modificar" &&
          <div className="w-full flex items-center justify-center ">
          <ModificarRegistroform/>
          </div>}
      {accion?.accion === "scanner" &&
          <div className="w-full flex items-center justify-center ">
          <ScannerComponent/>
          </div>}
        
      </div>
    </div>
    </div>
  )
}

export default Modal