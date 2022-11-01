import React from 'react'
import CrearRegistroFormList from '../registro/CrearRegistroFormList'

const ModificarRegistroform = () => {
  return (
    <div className='w-full h-full p-2'>
      <h3 className="font-bold text-lg mb-5 ">
        Modificar Registro
      </h3>
    <div className="grid  place-items-center md:place-items-start   md:grid-cols-2  md:gap-4 md:h-44 px-2  ">

      <div className='flex items-center justify-between gap-4 mb-5 w-full md:grid  md:place-items-center '>
        <input className='w-fit ' type="date" name="" id="" />
        <button className='btn btn-secondary '>Scanner</button>
      </div>

      <CrearRegistroFormList/>

    </div>
  
      <div className="modal-action mt-8">
        <label htmlFor="my-modal" className="btn ">
          Cancelar
        </label>
        <label htmlFor="my-modal" className="btn btn-primary">
         Crear
        </label>
      </div>
    </div>
  )
}

export default ModificarRegistroform