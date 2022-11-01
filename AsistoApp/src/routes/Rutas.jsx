import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import TrabajadorMenu from "../Pages/TrabajadorMenu";

const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trabajadores" element={<TrabajadorMenu />} />
      </Routes>
    </div>
  );
};

export default Rutas;
