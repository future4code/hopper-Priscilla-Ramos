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
  height: 670px;
  background-color: #DCDCDC;
`
const ImagemLogo = styled.img`
  margin-top: 2vh;
  width: 13vw;
  `
const ImagemCoracao = styled.div`
  display: flex;
  margin-top: 0px;
  height: 90px;
    width: 280px;
  img{
    margin: 35px;
    width: 3vw;
    height: 45px;
    
  }
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

  useEffect(() => { getProfile() }, []);

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

  const addMatches = (choice) => {

    const body = {
      id: id,
      choice: choice
    }

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:priscilla/choose-person', body)
      .then(() => {
        getProfile();

      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const listaInfos = infos.map((profile) => {
    return <ListaProfile key={profile.bio}>

      <PhotoProfile src={profile.photo} alt="foto usuário" />
      <h2>{profile.name}, {profile.age}</h2>
      <p>{profile.bio}</p>
      <ImagemCoracao>
        <span onClick={() => addMatches(true)} class="material-icons"> heart_broken </span>
        <span onClick={() => addMatches(false)} class="material-icons"> favorite </span>
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