import React from 'react';

const Item = ({ producto }) => {
  const { titulo, precio, imagen, categoria } = producto;

  return (
    <div className="item">
      <img src={imagen} alt={titulo} />
      <div>
        <h3>{titulo}</h3>
        <p>Categoría: {categoria}</p>
        <p>Precio: ${precio}</p>
      </div>
    </div>
  );
};

export default Item;