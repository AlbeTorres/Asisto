// rutas trabajos
const express = require('express');
const router = express.Router();
const trabajadoresController = require('../controllers/trabajadoresController');
const {check} = require('express-validator');
const auth = require('../middleware/auth');

//crear un trabajador
//api/trabajadores
router.post('/',auth,
    [
        check('nombre','El nombre no puede estar vacio').not().isEmpty(),
        check('categoria','La categoría no puede estar vacio').not().isEmpty(),
        check('estado','El estado no puede estar vacio').not().isEmpty(),
        check('area','El area no puede estar vacio').not().isEmpty(),
        check('creador','El creador no puede estar vacio').not().isEmpty(),
        
    ],
    trabajadoresController.crearTrabajador
);

//obtener todos los trabajadores
router.get('/',auth,
    trabajadoresController.obtenerTrabajador
    );
    
//modificar un trabajadores
router.patch('/:id',auth,
    trabajadoresController.modificarTrabajador
);

//eliminar un trabajadores
router.delete('/:id',auth,
    trabajadoresController.eliminarTrabajador
);

module.exports= router;