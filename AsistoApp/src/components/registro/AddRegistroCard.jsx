import React,{useContext} from 'react'
import registroContext from '../../context/registroContext/registroContext'

const AddRegistroCard = ({date}) => {


  const {establecerAccion}= useContext(registroContext)

  const establecerAccionAux=(accion)=>{

    establecerAccion({accion })
  }

  //esto es un test de commit


  return (
    <div className=' grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-fit py-4 gap-4 place-items-center border-gray-200 border-b   '>
        
        <div>
        <p className='text-gray-500'>
            {date}
        </p>
        </div>
        <div className='grid place-items-center '>
            <label onClick={()=>establecerAccionAux('scanner')} htmlFor="my-modal" className="btn modal-button bg-gray-800 text-white mr-4">Agregar</label>
            
            
        </div>
    </div>
  )
}

export default AddRegistroCard