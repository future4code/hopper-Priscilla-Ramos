import axios from "axios";
import React, {useEffect, useState} from "react";
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

const MatchImages = styled.img`
    max-width: 100%;
    width: 100px;
    height: 100px;
    border-radius: 90px;
`

const ImagemLogo = styled.img`
  margin-top: 2vh;
  width: 13vw;
  `


export default function Matches() {

    //renderiza na tela na primeira renderização

    useEffect(() => { getMatches() }, []);

    
    //tela matches e 
    
    const [matches, setMatches] = useState([])

    //puxa os matches dados da API

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

    //map para renderizar os matches

    const ListaMatch = matches.map((match) => {
        return <div>
            <MatchImages src={match.photo} alt="foto usuário" />
            <h2>{match.name}</h2>,
            
        </div>
    })

    return (
        <ContainerGeral>
            <h1>Matches</h1>

            <ImagemLogo src={logo} />
            {ListaMatch}
          
        </ContainerGeral>
    )
}