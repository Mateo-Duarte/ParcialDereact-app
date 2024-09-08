import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />         
        <Route path="/login" element={<Login />} />     
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/productos" element={<Productos />} />  
        <Route path="/productos/:id" element={<DetalleProducto />} /> 
      </Routes>
    </Router>
  );
}

export default App;
