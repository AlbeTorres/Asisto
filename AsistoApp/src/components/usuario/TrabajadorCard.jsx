import React from 'react'
import worker from '../../assets/noperfil.jpg'
import '../../index.css'

const TrabajadorCard = () => {
  return (
    <div className=' md:grid usuario-card h-fit py-4 gap-4   border-gray-200 border-b   '>
        <figure className='h-24 w-24 rounded-md '>
      <img src={worker} alt="" className='h-full w-full object-cover rounded-md' />
    </figure>
        <div  className='flex flex-col items-start justify-center pl-2'>
        <p className='text-gray-500'>
            Alberto Torres
        </p>
        <p className= 'md:hidden text-gray-500'>
        9900330044
        </p>
        </div>
        <div   className=' hidden md:flex flex-col items-start justify-center pl-2'>
        <p className='text-gray-500'>
        9900330044
        </p>
        </div>
        <div  className='hidden md:flex flex-col items-start justify-center pl-2'>
        <p className='text-gray-500'>
        Cargo
        </p>
        </div>
        <div className='flex flex-col items-center justify-center '>
            <label htmlFor="my-modal" className="btn modal-button bg-gray-800 text-white">Editar</label>
            
            
        </div>
    </div>
  )
}

export default TrabajadorCard