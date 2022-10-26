import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import UsuarioMenu from "../Pages/UsuarioMenu";

const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trabajadores" element={<UsuarioMenu />} />
      </Routes>
    </div>
  );
};

export default Rutas;
