import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../data/productos';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const productos = await getProductos();
        const selectedItem = productos.find(producto => producto.id === parseInt(id));
        setItem(selectedItem);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = (quantity) => {
    setCartQuantity(cartQuantity + quantity); // Actualizar la cantidad en el carrito
  };

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{item.titulo}</h2>
      <img src={item.imagen} alt={item.titulo} />
      <p>Precio: ${item.precio}</p>
      <p>Categoría: {item.categoria}</p>

      {/* Aquí integramos ItemCount */}
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />

      {/* Mostrar la cantidad en el carrito */}
      <p>Productos en carrito: {cartQuantity}</p>
    </div>
  );
};

export default ItemDetailContainer;
