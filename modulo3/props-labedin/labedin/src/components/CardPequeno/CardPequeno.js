import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div class="smallcard-container">
            <img src={props.imagem} />
            <h4>{props.info}</h4>
            <p>{props.descricao}</p>
        </div>
    )
}

export default CardPequeno;