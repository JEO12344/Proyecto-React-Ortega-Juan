import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <Router>
      <div>
        <Navbar handleCategoriaClick={handleCategoriaClick} />
        <Routes>
          <Route path="/" element={<ItemListContainer categoriaSeleccionada={categoriaSeleccionada} />} />
          <Route path="/category/:id" element={<ItemListContainer categoriaSeleccionada={categoriaSeleccionada} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;