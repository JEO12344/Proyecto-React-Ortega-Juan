import React from 'react';
import CartWidget from './CartWidget';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import logo from "./imagenes/favicon.png";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
          <p>Libreria Minvera</p>
            <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/category/fantasia">Fantasía</Link></li>
          <li><Link to="/category/historico">Histórico</Link></li>
          <li><Link to="/category/terror">Terror</Link></li>
        </ul>
        <CartWidget />
    </nav>
  );
};

export default Navbar;