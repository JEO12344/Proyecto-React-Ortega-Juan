import React from 'react';
import CartWidget from './CartWidget';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Libreria Minerva</h1>
      <div className="cart-container">
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;