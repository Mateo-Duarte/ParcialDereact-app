import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/styles.css";

const Productos = () => {
  const [productos, setProductos] = useState([]); 

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const { data } = await axios.get(
          "https://parcial.nucleoslabs.com.co/api/v1/productos/listar"
        );

        console.log("Datos de la API:", data); 

        
        if (data.result && Array.isArray(data.result)) {
          setProductos(data.result); 
        } else {
          console.error("Estructura de datos no esperada", data);
          setProductos([]); 
        }
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="productos-container">
      <h2>Lista de Productos</h2>
      <div className="productos-grid">
        {Array.isArray(productos) && productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto._id} className="producto-card">
              <Link to={`/productos/${producto._id}`}>
                <div className="image-wrapper">
                  <img
                    src={producto.image} 
                    alt={producto.name}
                    className="producto-image"
                  />
                </div>
                <h3>{producto.name}</h3>
                <p>${producto.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Productos;
