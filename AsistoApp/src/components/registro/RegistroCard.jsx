import React,{useContext} from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import registroContext from '../../context/registroContext/registroContext'
import { Link } from 'react-router-dom'

const RegistroCard =({id}) => {

  const {establecerAccion}= useContext(registroContext)

  const establecerAccionAux=(id)=>{

    establecerAccion({id })
  }
  return (
    <div className=' grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-fit py-4 gap-4 place-items-center border-gray-200 border-b   '>
        
        <div>
        <p className='text-gray-500'>
            22 de diciembre del 2022
        </p>
        </div>
        <div className='grid place-items-center '>
            <Link onClick={()=>establecerAccionAux(id)} to={'/modificarregistro'} className={'btn'} >Modificar</Link>
            
            
        </div>
    </div>
  )
}

export default RegistroCard