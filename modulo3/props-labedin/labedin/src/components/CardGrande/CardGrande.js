import React from 'react';
import styled from 'styled-components'

function CardGrande(props) {

    const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `

    const BigCardImage = styled.img`
     width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `

    const BigCardH4 = styled.h4`
    margin-bottom: 15px;
    `

    const BigCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `

    return (
        <BigCardContainer>
            <BigCardImage src={props.imagem} />
            <BigCardDiv>
                <BigCardH4>{props.nome}</BigCardH4>
                <p>{props.descricao}</p>
            </BigCardDiv>
        </BigCardContainer>
    )
}

export default CardGrande;