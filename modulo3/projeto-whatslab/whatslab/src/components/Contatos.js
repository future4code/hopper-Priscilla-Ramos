import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid grey;
    padding: 10px;
    background-color: #96CDCD;
`

const CardContatos = styled.div`
    display: flex;
    margin-top: 1vh;
    border: 1px solid grey;
    padding: 10px;
    height: 15vh;
    width: 30vw;
    background-color: #BBFFFF;
`
const Negrito = styled.p`
    font-size: larger;
`

const ImagemCardContatos = styled.img`
    margin-top: 2vh;
    text-align: center;
    weight: 1vw;
    height: 10vh;
    border-radius: 30px 30px;
    margin-right: 15px;
    
`

function Contatos() {

    return (

        <Container>
            <h2>Conversas</h2>

            <CardContatos >

                <ImagemCardContatos src="https://picsum.photos/200" />
                <div>
                    <p><strong>Contato</strong></p>
                    Olá, Mundo!!
                </div>

            </CardContatos >

            <CardContatos >

                <ImagemCardContatos src="https://picsum.photos/200" />
                <div>
                    <p><strong>Contato</strong></p>
                    Olá, Mundo!!
                </div>

            </CardContatos >

            <CardContatos >

                <ImagemCardContatos src="https://picsum.photos/200" />
                <div>
                    <p><strong>Contato</strong></p>
                    Olá, Mundo!!
                </div>

            </CardContatos >

            <CardContatos >

                <ImagemCardContatos src="https://picsum.photos/200" />
                <div>
                    <p><strong>Contato</strong></p>
                    Olá, Mundo!!
                </div>

            </CardContatos >

        </Container>

    )
}

export default Contatos;