import axios from "axios";
import React, { useEffect, useState } from "react";
import Matches from "./components/Matches";
import styled from "styled-components";
import logo from "./img/logo.png"

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid #696969;
  width: 40vw;
  height: 125vh;
  background-color: #DCDCDC;
`
const ImagemLogo = styled.img`
  width: 15vw;
  `
const ImagemCoracao = styled.div`
  display: flex;
  button{
    margin: 35px;}
  img{width: 4vw;}
`
const PhotoProfile = styled.img`
  margin-top: 6vh;
  width: 35vw;
  height: 65vh;
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
function App() {

  const [infos, setInfos] = useState([])

  //chama atualização da tela a cada atualização de perfil//

  useEffect(() => { getProfile() }, []);

  //chama o profile que ainda ñao foi visto//

  const getProfile = () => {

    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/priscilla/person')

      .then((response) => {
        setInfos([response.data.profile])
      })
      .catch((error) => {
        console.log(error.response.data)
      });
  }

  // map pra renderizar os profiles na tela

  const listaInfos = infos.map((profile) => {
    return <ListaProfile>

      <PhotoProfile src={profile.photo} alt="foto usuário" />
      <h1>{profile.name}, {profile.age}</h1>
      <h3>{profile.bio}</h3>
<ImagemCoracao>
        <button onClick={() => addMatches()}><img src={'https://www.shareicon.net/data/512x512/2016/01/10/700859_heart_512x512.png'} /></button>
        <button onClick={() => getProfile()}><img src={'https://cdn-icons-png.flaticon.com/512/39/39846.png'} /></button>
        </ImagemCoracao>
    </ListaProfile>
  })


  // CHOOSE PERSON

  const [choose, setChoose] = useState(false)

  //post para quando curte e add a lista de matches

  const addMatches = () => {

    const body = {
      id: "",
      choice: true
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/priscilla/choose-person", body)
      .then(() => {
        alert('deu certo!')
        getProfile()
      })
      .catch((error) => {
        alert('deu errado')
        console.log(error.response.data)
      })
  }


  // alternar entre telas  ??????????????????????????

  // const [tela, setTela] = useState("app")

  // const mudaTela = () => {
  //   switch (tela){
  //   case 1:
  //     return <App />
  //     case 2: return <Matches />
  //   }
  // }

  // onClickTrocarDeTela = () => {
  //   setTela({tela === "app" ? "lista matches" : "app" })
  // }

  // const irParaProximaTela = () => {
  //   setTela(+ 1)
  // }

  // const voltarTela = () => {
  //   setTela(- 1)
  // }

  return (
    <ContainerGeral>

      <ImagemLogo src={logo} />

      {listaInfos}

      {/* {mudaTela} */}
      {/* <button onClick={irParaProximaTela()}>Lista Matches</button> */}



    </ContainerGeral>
  );

}

export default App;
