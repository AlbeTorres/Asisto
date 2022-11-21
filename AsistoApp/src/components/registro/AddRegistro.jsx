import React,{useContext, useState} from 'react'
import AddRegistroCard from './AddRegistroCard'
import registroContext from '../../context/registroContext/registroContext'


const AddRegistro = () => {

  const {registros, crearRegistro}= useContext(registroContext);

  const area= 'nodo'

  
  const date= new Date()
  
  const fechahoy= date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()
  const[registro, setRegistro]=useState({
    estado:'en proceso',
    area:'nodo',
    fecha:fechahoy
  })
  let nuevo=true
  
  let registroactual=null
  registros?.map(registro=>(registro.fecha===fechahoy ? registroactual=registro:null))
  
  registroactual!==null ? nuevo=false : nuevo=true
  
  const onSubmit=()=>{
    crearRegistro(registro)
  }
  
  console.log(registro)
  return (
    <div className='w-full'>
    {nuevo ?
        <label  onClick={onSubmit} className='btn w-52 bg-gray-800  text-center flex mb-5 mx-auto'>Añadir Registro</label>:
         <div className=' border mb-4'>
         <div className='bg-gray-800 grid grid-cols-1 h-10 place-items-center rounded-t-md '>
            <p className='text-white '>Registro actual</p>
            
        </div>
        <AddRegistroCard/>
        </div> }
    </div>
  )
}

export default AddRegistro