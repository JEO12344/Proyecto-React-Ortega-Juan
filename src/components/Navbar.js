import React from 'react';
import CartWidget from './CartWidget';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import logo from "./imagenes/favicon.png";

const Navbar = ({ handleCategoriaClick }) => {
  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <p>Libreria Minvera</p>
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/" onClick={() => handleCategoriaClick('')}>Inicio</Link></li>
        <li><Link to="/category/fantasia" onClick={() => handleCategoriaClick('Fantasía')}>Fantasía</Link></li>
        <li><Link to="/category/historico" onClick={() => handleCategoriaClick('Histórico')}>Histórico</Link></li>
        <li><Link to="/category/terror" onClick={() => handleCategoriaClick('Terror')}>Terror</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};


export default Navbar;