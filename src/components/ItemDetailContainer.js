import React from 'react';
import ItemListContainer from './ItemListContainer';

function ItemDetailContainer({ libros, id }) {
  const libro = libros.find((libro) => libro.id === id);

  if (!libro) {
    return <div>No se encontró el libro</div>;
  }

  return (
    <div className="item-detail">
      <img src={libro.imagen} alt={libro.titulo} />
      <h2>{libro.titulo}</h2>
      <p>Precio: {libro.precio}</p>
    </div>
  );
}

export default ItemDetailContainer;