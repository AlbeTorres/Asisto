const mongoose = require('mongoose');

const RegistroSchema = mongoose.Schema({


    listatrabajadores:{
        type: Array,
        required: true,
    },
    estado:{
        type: String,
        required: true,
    },
    area:{
        type: String,
        required: true,
    },
    fecha:{
        type: Date,
        default: Date.now()
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    },
    

});

module.exports = mongoose.model('Registro', RegistroSchema);