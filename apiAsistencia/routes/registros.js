// rutas productos
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
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
    productoController.crearProducto
);

//obtener todos los participantes
router.get('/',
    productoController.obtenerProductos
    );

//modificar un participante
router.patch('/:id',auth,
    productoController.modificarProducto
    );

//eliminar un participante
router.delete('/:id',auth,
    productoController.eliminarProducto
    );


module.exports= router;
