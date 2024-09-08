import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../assets/styles.css";  
const DetalleProducto = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const { data } = await axios.get(`https://parcial.nucleoslabs.com.co/api/v1/productos/listar/${id}`);
        setProducto(data.data);
      } catch (error) {
        console.error("Error al obtener el producto", error);
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="detalle-producto-container">
      <h2>{producto.name}</h2>
      <img src={producto.image} alt={producto.name} className="detalle-producto-image" />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
    </div>
  );
};

export default DetalleProducto;
