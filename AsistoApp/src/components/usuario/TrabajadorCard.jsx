import React from 'react'

const TrabajadorCard = () => {
  return (
    <div className=' grid grid-rows-2 md:grid-cols-4 md:grid-rows-1 h-fit py-4 gap-4 place-items-center border-gray-200 border-b   '>
        
        <div>
        <p className='text-gray-500'>
            Alberto Torres
        </p>
        </div>
        <div>
        <p className='text-gray-500'>
            Departamento
        </p>
        </div>
        <div>
        <p className='text-gray-500'>
            Cargo
        </p>
        </div>
        <div className='grid place-items-center '>
            <label htmlFor="my-modal" className="btn modal-button bg-gray-800 text-white">Editar</label>
            
            
        </div>
    </div>
  )
}

export default TrabajadorCard