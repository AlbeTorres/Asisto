import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import ModificarRegistroform from "../components/modalform/ModificarRegistroform";
import Login from "../Pages/auth/Login";
import NuevaCuenta from "../Pages/auth/Register";
import Home from "../Pages/Home";
import TrabajadorMenu from "../Pages/TrabajadorMenu";

const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/trabajadores" element={<TrabajadorMenu />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<NuevaCuenta />} />
        <Route exact path="/modificarregistro" element={<ModificarRegistroform />} />
      </Routes>
    </div>
  );
};

export default Rutas;
