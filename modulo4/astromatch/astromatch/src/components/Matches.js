import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "./img/logo.png"

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid #696969;
  width: 550px;
  height: 100%;
  background-color: #DCDCDC;
`

const ContainerLista = styled.span`
display: grid;
align-items: center;
grid-template-columns: 1fr 1fr;
justify-items: end;
padding-top: 10px;
padding-bottom: 10px;
`

const MatchImages = styled.img`
    max-width: 100%;
    width: 80px;
    height: 80px;
    border-radius: 90px;
    padding-right: 10px;

`

const ImagemLogo = styled.img`
  margin-top: 2vh;
  width: 13vw;
    `


export default function Matches() {

    const [matches, setMatches] = useState([])

    useEffect(() => { getMatches() }, []);

    const getMatches = () => {

        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:priscilla/matches')

            .then((response) => {
                setMatches(response.data.matches)
                console.log(response.data.matches)
            })
            .catch((error) => {
                console.log(error.response)
            })
    };

    const ListaMatch = matches.map((match) => {
        return <ContainerLista>
            <MatchImages src={match.photo} alt="foto usuário" />
            <h4>{match.name}</h4>
        </ContainerLista>
    })

    return (
        <ContainerGeral>

            <ImagemLogo src={logo} />
            {ListaMatch}

        </ContainerGeral>
    )
}