const Registro = require('../models/Registro');
const {validationResult} = require('express-validator');



exports.crearRegistro= async(req, res)=>{
     //revisar si hay errores
     const errores = validationResult(req);
     if(!errores.isEmpty()){
         return res.status(400).json({errores: errores.array()});
     }

     try {

        //crear trabajo
        const registro = new Registro(req.body);
        registro.creador = req.usuario.id;

        await registro.save();
        res.status(200).json(registro);
         
     } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Hubo un error'})
         
     }
    
}

//obtener todos los trabajos
exports.obtenerRegistro= async(req, res)=>{

    try {

         const registros = await Registro.find();
         res.status(200).json({registros});

    } catch (error) {
       console.log(error)
       res.status(500).json({msg:'Hubo un error'})
        
    }

}
exports.modificarRegistro= async(req, res)=>{

    try {

        //verificar que el trabajo existe
        const registroFind = await Registro.findById(req.params.id);
        if(!registroFind){
            return res.status(404).json({msg:'No existe el Registro a modificar'});
        }

        //actualizar trabajo
        await Registro.updateOne({_id:req.params.id},{$set: req.body})

        const resolve = await Registro.findById(req.params.id);
        res.status(200).json(resolve);
         
    } catch (error) {
       console.log(error)
       res.status(500).json({msg:'Hubo un error'})
        
    }

}
exports.eliminarRegistro= async(req, res)=>{

    try {

         //verificar que el trabajo existe
         const registroFind = await Registro.findById(req.params.id);
        if(!registroFind){
            return res.status(404).json({msg:'No existe el Registro a modificar'});
        }

         //eliminar trabajo
         await Registro.findOneAndRemove({_id:req.params.id});
         res.status(200).json({msg:'Registro eliminado correctamente'});
         
    } catch (error) {
       console.log(error)
       res.status(500).json({msg:'Hubo un error'})
        
    }

}