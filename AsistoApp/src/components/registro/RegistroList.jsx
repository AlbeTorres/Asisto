import React from 'react'
import RegistroCard from './RegistroCard'

const RegistroList = () => {
  return (
    <div>
        <div className='bg-gray-800 grid grid-cols-1 h-10 place-items-center rounded-t-md '>
            <p className='text-white '>Registros de asistencia</p>
            
        </div>
        <div className='border-2 border-gray-200 rounded-b-md overflow-y-auto h-96'>
        <RegistroCard/>
        <RegistroCard/>
        <RegistroCard/>
        <RegistroCard/>
        <RegistroCard/>
        <RegistroCard/>
        <RegistroCard/>
        <RegistroCard/>
        <RegistroCard/>
        <RegistroCard/>

        </div>
    </div>
  )
}

export default RegistroList