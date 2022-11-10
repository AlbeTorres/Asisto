const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    area:{
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
    registro:{
        type: Date,
        default: Date.now()

    },
    isAdmin:{
        type: Boolean
    },
    carnet:{
        type: String,
        trim: true
    },

});

module.exports = mongoose.model('Usuario', UsuariosSchema);