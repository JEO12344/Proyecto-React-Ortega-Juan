import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <h1>Libreria Minerva</h1>
      <div style={cartContainerStyle}>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;