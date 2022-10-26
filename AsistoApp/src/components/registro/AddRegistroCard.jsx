import React from 'react'

const AddRegistroCard = () => {
  return (
    <div className=' grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-fit py-4 gap-4 place-items-center border-gray-200 border-b   '>
        
        <div>
        <p className='text-gray-500'>
            22 de diciembre del 2022
        </p>
        </div>
        <div className='grid place-items-center '>
            <label htmlFor="my-modal" className="btn modal-button bg-gray-800 text-white mr-4">Agregar</label>
            
            
        </div>
    </div>
  )
}

export default AddRegistroCard