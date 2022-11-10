// rutas productos
const express = require('express');
const router = express.Router();
const registrosController = require('../controllers/registrosController');
const {check} = require('express-validator');
const auth = require('../middleware/auth');


//crear un producto
//api/productos
router.post('/',auth,
    [ 
        check('estado','El estado es obligatorio').not().isEmpty(),
        check('fecha', 'La fecha es obligatoria').not().isEmpty(),
        check('area', 'El area es obligatoria').not().isEmpty(),
    
    ],
    registrosController.crearRegistro
);

//obtener todos los participantes
router.get('/',
    registrosController.obtenerRegistro
    );

//modificar un participante
router.patch('/:id',auth,
    registrosController.modificarRegistro
    );

//eliminar un participante
router.delete('/:id',auth,
    registrosController.eliminarRegistro
    );


module.exports= router;
