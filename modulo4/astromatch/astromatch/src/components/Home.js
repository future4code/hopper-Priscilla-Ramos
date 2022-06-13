import React, { useEffect, useState } from "react";
import axios from "axios";
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
const ImagemLogo = styled.img`
  margin-top: 2vh;
  width: 13vw;
  `
const ImagemCoracao = styled.div`
  display: flex;
  button{
    margin: 35px;}
  img{width: 4vw;}
`
const PhotoProfile = styled.img`
  margin-top: 6vh;
  max-width: 100%;
  width: 350px;
  height: 350px;
  object-fit: contain;
`
const ListaProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 70vw;
height: 110vh;
  h1{
    margin: 2vh;
  }
`

export default function Home() {

    const [infos, setInfos] = useState([])
    const [id, setId] = useState("")

    //chama atualização da tela a cada atualização de perfil//

    useEffect(() => { getProfile() }, []);

    //chama o profile que ainda não foi visto//

    const getProfile = async () => {
        const name = 'priscilla'

        try {
            const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${name}/person`)
            setInfos([response.data.profile]);
            setId(response.data.profile.id)
            console.log(response.data.profile)
        }
        catch (error) {
            console.log(error.response)
        }
    }

    // CHOOSE PERSON

    //post para quando curte e add a lista de matches

    const addMatches = (choice) => {

        const body = {
            id: id,
            choice: choice
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:priscilla/choose-person', body)
            .then(() => {
                // alert('deu certo!');
                getProfile();

            })
            .catch((error) => {
                console.log(error.response)
            })
    }


    // map pra renderizar os profiles na tela

    const listaInfos = infos.map((profile) => {
        return <ListaProfile key={profile.bio}>

            <PhotoProfile src={profile.photo} alt="foto usuário" />
            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.bio}</p>
            <ImagemCoracao>
                <button onClick={() => addMatches(true)}>
                    <img src={'https://w7.pngwing.com/pngs/1012/524/png-transparent-line-angle-leaf-philosophy-heart-and-arrow-love-angle-leaf.png'} />
                </button>
                <button onClick={() => addMatches(false)}>
                    <img src={'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png'} />
                </button>
            </ImagemCoracao>
        </ListaProfile>
    })


    return (
        <ContainerGeral>

            <ImagemLogo src={logo} />

            {listaInfos}

        </ContainerGeral>
    )
}