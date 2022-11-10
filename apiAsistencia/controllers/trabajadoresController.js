const Trabajador = require('../models/Trabajador');
const { validationResult} = require('express-validator');
const cloudinary = require('cloudinary').v2



//crear un trabajador
exports.crearTrabajador= async(req, res)=>{
    
    //revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

    try {
        //crear un nuevo trabajador

        const trabajador= new Trabajador(req.body);
        await trabajador.save();
        res.status(200).json(trabajador);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Hubo un error'})
        
    }

}

//obtener todos los trabajadores

exports.obtenerTrabajador= async(req, res)=>{

    try {
        const trabajadores = await Trabajador.find({});

        res.status(200).json({trabajadores});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Hubo un error'})
        
        
    }
}

//modificar un trabajador

exports.modificarTrabajador= async(req, res)=>{

    try {

        //comprobar que existe el trabajador
        let trabajadorFind = await Trabajador.findById(req.params.id);

        if(!trabajadorFind){
            return res.status(404).json({msg:'Trabajador no encontrado'});
        }

        //actualizar trabajador
        await Trabajador.updateOne({_id:req.params.id},{$set:req.body});
        const trabajador = await Trabajador.findById(req.params.id)

        res.status(200).json({trabajador});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Hubo un error'})
        
    }

}

//eliminar un trabajador
exports.eliminarTrabajador= async(req,res)=>{
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.APIKEY,
        api_secret: process.env.APISECRET
      });

      console.log ({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.APIKEY,
        api_secret: process.env.APISECRET
      })

    try {

        //comprobar que existe el trabajador
        let trabajadorFind = await Trabajador.findById(req.params.id);
        console.log(trabajadorFind)

        if(!trabajadorFind){
            return res.status(404).json({msg:'Trabajador no encontrado'});
        }

        //eliminar

        cloudinary.uploader.destroy(trabajadorFind.cloud_id, function(error,result) {
            console.log(result, error) });

        await Trabajador.findOneAndRemove({_id:req.params.id});

        res.status(200).json({msg:'Trabajador eliminado correctamente'});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Hubo un error'})
    }


}