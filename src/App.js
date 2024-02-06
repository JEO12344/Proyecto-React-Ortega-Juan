import React from 'react';
import Navbar from "./components/Navbar";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Orgullo from "./imagenes/orgullo.jpg";
import Alicia from "./imagenes/alicia.png";
import Frankestein from "./imagenes/frankenstein.jpg";

function App() {
    return (
        <div>
            <Navbar />
            <h1>Libros</h1>
            <ItemListContainer titulo1="Orgullo y Prejuicio" precio="5000" img={Orgullo} />
            <ItemListContainer titulo2="Alicia en el Pais de las maravilla" precio="5700" img={Alicia} />
            <ItemListContainer titulo3="Frankestein" precio="6000" img={Frankestein} />
        </div>
    );
}

export default App;