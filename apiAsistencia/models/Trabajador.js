const mongoose = require('mongoose');

const TrabajadorSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true,
        trim: true
    },
    categoria:{
        type: String,
        trim: true
    },
    estado:{
        type: String,
        trim: true
    },
    img:{
        type: String,
        
    },
    cloud_id:{
        type: String,
        
    },
    provincia:{
        type: String,
        trim: true
    },
    municipio:{
        type: String,
        trim: true
    },
   area:{
        type: String,
    },
    carnet:{
        type: String,
        trim: true
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario'
    },
    registro:{
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Trabajador', TrabajadorSchema);