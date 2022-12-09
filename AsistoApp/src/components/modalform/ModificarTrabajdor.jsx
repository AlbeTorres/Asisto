import React,{useContext, useState, useEffect, useCallback}  from "react";
import AddImg from "../img/AddImg";
import trabajadorContext from '../../context/trabajadorContext/trabajadorContext' 
import authContext from '../../context/authContext/authContext'
import registroContext from "../../context/registroContext/registroContext";
import worker from '../../assets/noperfil.jpg'

const ModificarTrabajdor = () => {

    const {obtenerTrabajador,modificarTrabajador, trabajador}=useContext(trabajadorContext);
    const {usuario}= useContext(authContext)
    const {accion}= useContext(registroContext)


    const[trabajadorA, setTarbajador]=useState({
        nombre:'',
        img:'',
        categoria:'',
        area:'',
        carnet:'',
        estado:'activo',
        creador:usuario._id,
        cloud_id:''
    });


    let auxnombre=0;
    

    if(trabajador!=null){
      auxnombre= trabajador.nombre;
      
    }

    function obtenerTrabajadorA(aux){
        if(auxnombre===0){console.log('eso')}
        
        if(auxnombre!=0){
          
            setTarbajador({
                nombre:trabajador.nombre,
                img:trabajador.img,
                categoria:trabajador.categoria,
                area:trabajador.area,
                carnet:trabajador.carnet,
                estado:trabajador.estado,
                creador:trabajador.creador
            })
        }
      }
  
  
      
      
      const eso = useCallback(()=>obtenerTrabajadorA(auxnombre),[auxnombre])

      useEffect(() => {
        obtenerTrabajador(accion.id)
        eso()
        
  
        },[eso, accion.id]);

console.log(trabajadorA)

    const adImg=(img,id)=>{
        setTarbajador({
            ...trabajador,
            img,
            cloud_id:id
        })


    }

    const {nombre, img, categoria, area, carnet}=trabajadorA;

    const onChange=e=>{

        setTarbajador({
            ...trabajadorA,
            [e.target.name]:e.target.value
        })
    }


    const onSubmit=()=>{
        

        modificarTrabajador(accion.id,trabajadorA)

        setTarbajador({
            nombre:'',
            img:'',
            categoria:'',
            area:'',
            carnet:'',
            estado:'activo',
            creador:usuario._id
        })
    }


const onCancel=()=>{
    setTarbajador({
        nombre:'',
        img:'',
        categoria:'',
        area:'',
        carnet:'',
        estado:'activo',
        creador:usuario._id
    })
}






  return (
    <div className="flex flex-col justify-center md:flex-row  md:justify-between md:gap-x-5 ">
    <figure className="h-44 my-2 w-44 rounded-md mx-auto">
      <AddImg img={img==='' ? worker: img} addImg={adImg} />
    </figure>
    <div>
      <div className="my-2">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <div className="relative mt-1 rounded-md border">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="nombre"
            id="price"
            value={nombre}
            onChange={onChange}
            className="block h-8 w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="my-2">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Categoría
        </label>
        <div className="relative mt-1 rounded-md border">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="categoria"
            id="price"
            value={categoria}
            onChange={onChange}
            className="block h-8 w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="my-2">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Área
        </label>
        <div className="relative mt-1 rounded-md border">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="area"
            id="price"
            value={area}
            onChange={onChange}
            className="block h-8 w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="my-2">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Carnet de identidad
        </label>
        <div className="relative mt-1 rounded-md border">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="carnet"
            id="price"
            value={carnet}
            onChange={onChange}
            className="block h-8 w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="w-full flex items-center my-5 justify-end">
        <label onClick={onSubmit} htmlFor="my-modal" className="btn ">Modificar</label>
        <label onClick={onCancel} htmlFor="my-modal" className="btn ml-5">Cancelar</label>
      </div>
    </div>
  </div>
  )
}

export default ModificarTrabajdor