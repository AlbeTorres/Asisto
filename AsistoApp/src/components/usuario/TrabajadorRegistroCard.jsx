import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import worker from '../../assets/worker.jfif'
import '../../index.css'

const TrabajadorRegistroCard = () => {
  return (
    <div className='w-full md:w-3/4 px-2 mx-auto usuario-registro__card border-gray-200 border-b overflow-x-hidden '>
        
    <figure className='h-24 w-24 rounded-md '>
      <img src={worker} alt="" className='h-full w-full object-cover rounded-md' />
    </figure>
    <div className='flex flex-col items-start justify-center pl-2'>
    <p className='text-gray-500'>
        Alberto Torres
    </p>
    <p className='text-gray-500'>
        Hora llegada
    </p>
    </div>
    <div className='flex flex-col items-center justify-center  bg-red-600 rounded-md '>

   

      <FaTrashAlt className='text-3xl text-white  '/>
    
    </div>
    
</div>
  )
}

export default TrabajadorRegistroCard