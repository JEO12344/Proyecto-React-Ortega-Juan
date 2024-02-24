import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProductos } from '../data/productos';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then(data => setProductos(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Libros Disponibles</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;