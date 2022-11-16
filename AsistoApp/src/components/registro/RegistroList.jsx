import React, {useContext, useEffect} from 'react'
import RegistroCard from './RegistroCard'
import registroContext from '../../context/registroContext/registroContext'

const RegistroList = () => {



  const {registros, obtenerRegistros}=useContext(registroContext)

  useEffect(()=>{
    obtenerRegistros()
  },[])

  console.log(registros)
  return (
    <div>
        <div className='bg-gray-800 grid grid-cols-1 h-10 place-items-center rounded-t-md '>
            <p className='text-white '>Registros de asistencia</p>
            
        </div>
        <div className='border-2 border-gray-200 rounded-b-md overflow-y-auto h-96'>

        {
          registros.length!==0 ?
        registros.map(registro=><RegistroCard/>):
        
        <h1>No hay registros creados aun</h1>
        }
        

        </div>
    </div>
  )
}

export default RegistroList