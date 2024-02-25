import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProductos } from '../data/productos';

const ItemListContainer = ({ categoriaSeleccionada }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        if (categoriaSeleccionada) {
          const productosFiltrados = data.filter(producto => producto.categoria === categoriaSeleccionada);
          setProductos(productosFiltrados);
        } else {
          setProductos(data);
        }
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    };

    fetchProductos();
  }, [categoriaSeleccionada]);

  return (
    <div>
      <h2>Libros Disponibles</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;