import React from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const RegistroCard = () => {
  return (
    <div className=' grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-fit py-4 gap-4 place-items-center border-gray-200 border-b   '>
        
        <div>
        <p className='text-gray-500'>
            22 de diciembre del 2022
        </p>
        </div>
        <div className='grid place-items-center '>
            <label htmlFor="my-modal" className="btn modal-button bg-gray-800 text-white">Editar</label>
            
            
        </div>
    </div>
  )
}

export default RegistroCard