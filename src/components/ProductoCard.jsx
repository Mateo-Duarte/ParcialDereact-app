// src/components/ProductoCard.jsx
import React from "react";

const ProductoCard = ({ producto }) => {
  return (
    <div className="producto-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default ProductoCard;