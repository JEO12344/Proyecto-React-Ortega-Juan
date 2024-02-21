import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './components/Navbar.css';
import Layout from "./pages/Layout";
import SearchBar from "./SearchBar";
import Orgullo from "./components/imagenes/orgullo.jpg";
import Alicia from "./components/imagenes/alicia.png";
import Frankestein from "./components/imagenes/frankenstein.jpg";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;