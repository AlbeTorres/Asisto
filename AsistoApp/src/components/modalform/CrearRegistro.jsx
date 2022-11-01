import React from "react";

const CrearRegistro = () => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-5 ">
        Crear Nuevo Registro
      </h3>
    <div className="grid place-items-center ">

      <div>
        <input type="date" name="" id="" />
      </div>

    </div>
  
      <div className="modal-action">
        <label htmlFor="my-modal" className="btn">
          Cancelar
        </label>
        <label htmlFor="my-modal" className="btn btn-primary">
         Crear
        </label>
      </div>
    </div>
  );
};

export default CrearRegistro;
