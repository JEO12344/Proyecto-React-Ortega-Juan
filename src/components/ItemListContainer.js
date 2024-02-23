import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from "./asyncMock"

const ItemListContainer = ({ greeting }) => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => {
        setLibros(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList productos={libros} />
    </div>
  );
};

export default ItemListContainer;