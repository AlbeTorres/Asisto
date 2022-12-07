import React,{useContext}  from 'react'
import CrearRegistro from '../../components/modalform/CrearRegistro'
import ModificarRegistroform from '../modalform/ModificarRegistroform'
import ScannerComponent from '../scanner/ScannerComponent'
import registroContext from '../../context/registroContext/registroContext'
import CrearTrabajador from '../modalform/CrearTrabajador'


const Modal = () => {

  const {accion}= useContext(registroContext)

  
 
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
      {accion?.accion === "creartrabajador" &&
          <div className="w-full flex items-center justify-center ">
          <CrearTrabajador/>
          </div>}
        
      </div>
    </div>
    </div>
  )
}

export default Modal