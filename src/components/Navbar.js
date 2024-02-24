import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from "./imagenes/favicon.png";
import "./Navbar.css"

const Navbar = ({ handleCategoriaClick }) => {
  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <Link to="/">
          <p>Libreria Minvera</p>
          <img src={logo} alt="Logo" />
        </Link>
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