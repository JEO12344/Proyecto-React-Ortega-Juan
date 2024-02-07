import React from 'react';
import Orgullo from "./imagenes/orgullo.jpg";
import Alicia from "./imagenes/alicia.png";
import Frankestein from "./imagenes/frankenstein.jpg";

function ItemListContainer(props) {
    return (
        <div className="item-container">
            <img src={props.img} alt={props.titulo} />
            <h2>{props.titulo}</h2>
            <p>Precio: {props.precio}</p>
        </div>
    );
}
export default ItemListContainer;