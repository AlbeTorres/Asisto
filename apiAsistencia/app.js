const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

////////////////////Middleware/////////////////////////////////

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:8080/", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
}}

app.use(cors(
    config.application.cors.server));

app.use(express.urlencoded({
    extended:true
}));


app.use(express.json());



///////////////////Database//////////////////////////////////

//////////////////conección/////////////////////////////////

mongoose.connect("mongodb://localhost:27017/asistenciaDB");

/////////////////Schema////////////////////////////////////

const usuarioSchema={
    name:String,
    password:String,
    area:String,
    isAdmin:Boolean
};

const trabajadorSchema={
    name:String,
    area:String
};

const registroSchema={
    date:String,
    area:String,
    listaTrabadores: Array
};

///////////////Modelos/////////////////////////////////////

const Usuario = mongoose.model("Usuario",usuarioSchema);
const Trabajador = mongoose.model("Trabajador",trabajadorSchema);
const Registro = mongoose.model("Registro",registroSchema);


/////////////////Rutas////////////////////////////////////

///////////////Many Object Request////////////////////////

app.route("/usuarios")
    .get(function(req,res){
        Usuario.find(function(err,foundUsers){
            if(!err){
                res.send(foundUsers);
            }else{
                res.send(err)
            }
        });
    })
    .post(function(req,res){

        const newUser= Usuario({
            name: req.body.name,
            password: req.body.password,
            area: req.body.area,
            isAdmin: req.body.isAdmin
        });

        newUser.save(function(err,newUser){
            if(!err){
                res.status(200).jsonp(newUser);

            }else{
                res.send(err);
            }
        });

    })
    .delete(function(req,res){
        Usuario.deleteMany(function(err){
            if(!err){
                res.send("Toda la base de datos fué eliminada con éxito");
            }else{
                res.send(err);
            }
        })

    });

app.route("/trabajadores")
    .get(function(req,res){

        Trabajador.find(function(err,foundWorkers){
                if(!err){
                    res.send(foundWorkers);
                }else{
                    res.send(err);
                }


        });

    })

    .post(function(req,res){

        const newWorker= Trabajador(
            {
                name: req.body.name,
                area: req.body.area
            });
            

        newWorker.save(function(err,newWoker){
            if(!err){
                res.status(200).jsonp(newWorker);

            }else{
                res.send(err);
            }

        });

    })
    .delete(function(req,res){
        Trabajador.deleteMany(function(err){
            if(!err){
                res.send("Toda la base de datos fué eliminada con éxito");
            }else{
                res.send(err);
            }
        })

    });

    app.route("/registros")
        .get(function(req,res){
            Registro.find(function(err,foundDocuments){
                if(!err){
                    res.send(foundDocuments);
                }else{
                    res.send(err);
                }
            })
        })
        .post(function(req,res){

            const newRegistro= Registro({
                date:req.body.date,
                area:req.body.area,
                listaTrabadores: req.body.listaTrabajadores
            });

            newRegistro.save(function(err){
                if(!err){
                    res.send("Registro añadido correctamente");
                }else{
                    res.send(err);
                }
            })

            console.log(req.body.listaTrabajadores);
        })
        .delete(function(req,res){
            Registro.deleteMany(function(err){
                if(!err){
                    res.send("Toda la base de datos ha sido eleiminada");
                }else{
                    res.send(err);
                }
            })
        });

///////////////////////Single Object request///////////////////////////////////////
app.route("/usuarios/:id")
    .get(function(req,res){
        Usuario.findOne({_id:req.params.id},function(err,foundUser){
            if(foundUser){
                res.send(foundUser);
            }else{
                res.send("No existe ese Usuario");
            }

        });
    })
    .patch(function(req,res){
        Usuario.updateOne({_id:req.params.id},{$set:req.body},function(err){
            if(!err){
                res.send("Información actualizada correctamente");
            }else{
                res.send(err);
            }
        });
    })
    .delete(function(req,res){
        Usuario.deleteOne({_id:req.params.id},function(err){
            if(!err){
                res.send("Elemento eliminado exitosamente");
            }else{
                res.send(err);
            }

        });
    });

app.route("/trabajadores/:id")
    .get(function(req,res){
        Trabajador.findOne({_id:req.params.id},function(err,foundWorker){
            if(foundWorker){
                res.send(foundWorker);
            }else{
                res.send("No existe ese trabajador");
            }

        });
    })
    .patch(function(req,res){
        Trabajador.updateOne({_id:req.params.id},{$set:req.body},function(err){
            if(!err){
                res.send("Información actualizada correctamente");
            }else{
                res.send(err);
            }
        });
    })
    .delete(function(req,res){
        Trabajador.deleteOne({_id:req.params.id},function(err){
            if(!err){
                res.send("Elemento eliminado exitosamente");
            }else{
                res.send(err);
            }

        });
    });

    app.route("/registros/:id")
        .get(function(req,res){
            Registro.findOne({_id:req.params.id},function(err,foundRegistro){
                if(foundRegistro){
                    res.send(foundRegistro);
                }else{
                    res.send("No existe el registro solicitado");
                }
            });
        })
        .patch(function(req,res){
            Registro.updateOne({_id:req.params.id},{$set:req.body},function(err){
                if(!err){
                    res.send("Modificado correctamente");
                }else{
                    res.send(err);
                }
            })
        })
        .delete(function(req,res){
            Registro.deleteOne({_id:req.params.id},function(err){
                if(!err){
                    res.send("eliminado correctamente");

                }else{
                    res.send(err);
                }
            });
        });


//////////////////Correr el Server///////////////////////////////////////////////
    app.listen(3000,function(){
        console.log("server running on http://127.0.0.1:3000")
    })