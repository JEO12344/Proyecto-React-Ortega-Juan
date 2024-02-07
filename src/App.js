import React from 'react';
import Navbar from "./components/Navbar";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Orgullo from "./components/imagenes/orgullo.jpg";
import Alicia from "./components/imagenes/alicia.png";
import Frankestein from "./components/imagenes/frankenstein.jpg";

function App() {
    return (
        <div>
            <Navbar />
            <h1>Libros</h1>
            <ItemListContainer titulo="Orgullo y Prejuicio" precio="5000" img={Orgullo} />
            <ItemListContainer titulo="Alicia en el Pais de las maravilla" precio="5700" img={Alicia} />
            <ItemListContainer titulo="Frankestein" precio="6000" img={Frankestein} />
        </div>
    );
}

export default App;