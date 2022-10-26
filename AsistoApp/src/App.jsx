import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./components/modal/Modal";
import ScannerComponent from "./components/scanner/ScannerComponent";
import Home from "./Pages/Home";
import Rutas from "./routes/Rutas";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <div className="">
      <Router>
        <Rutas />
      </Router>
    </div>
  );
}

export default App;
