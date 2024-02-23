import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting="Bienvenido a la librería" />
      </header>
    </div>
  );
}

