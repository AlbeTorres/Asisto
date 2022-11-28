import React from 'react'

const TrabajadorRegistroCard = () => {
  return (
    <div className=' grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 h-fit py-4 gap-4 place-items-center border-gray-200 border-b   '>
        
    <div>
    <p className='text-gray-500'>
        Alberto Torres
    </p>
    </div>
    <div>
    <p className='text-gray-500'>
        Departamento
    </p>
    </div>
    <button className='btn btn-secondary'>Elminar</button>
    
</div>
  )
}

export default TrabajadorRegistroCard