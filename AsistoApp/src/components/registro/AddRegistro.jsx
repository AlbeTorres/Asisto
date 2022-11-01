import React from 'react'
import AddRegistroCard from './AddRegistroCard'


const AddRegistro = () => {
    let nuevo=false
  return (
    <div className='w-full'>
    {nuevo ?
        <label  htmlFor="my-modal" className='btn w-52 bg-gray-800  text-center flex mb-5 mx-auto'>Añadir Registro</label>:
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