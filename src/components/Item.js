import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ producto }) => {
  const { id, titulo, precio, imagen, categoria } = producto;

  return (
    <div className="item">
      <Link to={`/item/${id}`}>
        <img src={imagen} alt={titulo} />
        <div>
          <h3>{titulo}</h3>
          <p>Categoría: {categoria}</p>
          <p>Precio: ${precio}</p>
          <button className="btn">Agregar al Carrito</button>
        </div>
      </Link>
    </div>
  );
};

export default Item;