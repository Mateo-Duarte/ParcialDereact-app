// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import "./assets/styles.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
      </Routes>
    </Router>
  );
};

export default App;
