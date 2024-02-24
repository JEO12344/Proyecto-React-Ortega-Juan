import React from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import cartIcon from "./imagenes/carrito.png";

const CartWidget = ({ cartItemCount }) => {
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <img src={cartIcon} alt="Cart Icon" />
        {cartItemCount > 0 && <span>{cartItemCount}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;