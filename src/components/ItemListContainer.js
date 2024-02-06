import React from 'react';
import Orgullo from "./imagenes/orgullo.jpg";
import Alicia from "./imagenes/alicia.png";
import Frankestein from "./imagenes/frankenstein.jpg";

function ItemListContainer(props) {
    return (
        <div>
            <div>
                <img src={Orgullo} alt="Orgullo" />
                <h2>{props.titulo1}</h2>
            </div>
            
            <div>
                <img src={Alicia} alt="Alicia" />
                <h2>{props.titulo2}</h2>
            </div>
            
            <div>
                <img src={Frankestein} alt="Frankestein" />
                <h2>{props.titulo3}</h2>
            </div>
        </div>
    );
}

export default ItemListContainer;