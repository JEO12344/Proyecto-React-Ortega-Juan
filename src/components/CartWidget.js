import React from 'react';
import cartIcon from "./imagenes/carrito.png";

const CartWidget = () => {
  const cartItemCount = 3;

  return (
    <div>
      <img src={cartIcon} alt="Cart Icon" style={{ width: '30px', height: '30px' }} />
      <span style={{ marginLeft: '5px' }}>{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;