import React,{useContext, useEffect} from 'react'
import trabajadorContext from '../../context/trabajadorContext/trabajadorContext'
import TrabajadorCard from '../usuario/TrabajadorCard';

const ListaTrabajadores = () => {



    const {trabajadores, obtenerTrabajadores}= useContext(trabajadorContext);
    useEffect(()=>{
        obtenerTrabajadores();
      },[])


  return (
    <div className="grid  h-full  md:items-start gap-6 mt-2 auto-rows-min md:place-items-start  w-full overflow-y-scroll     ">
       
       
   {trabajadores.map(trabajador=><TrabajadorCard key={trabajador._id} id={trabajador._id} nombre={trabajador.nombre} img={trabajador.img} carnet={trabajador.carnet} categoria={trabajador.categoria} />)}
    
    
    
   </div>
  )
}

export default ListaTrabajadores