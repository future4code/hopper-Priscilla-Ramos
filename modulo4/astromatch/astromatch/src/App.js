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
  width: 550px;
  height: 650px;
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
  max-width: 50%;
  max-height: 50%;
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
        setInfos([response.data.profile]);
      })
      .catch((error) => {
        console.log(error.response.data)
      });
  }

  // map pra renderizar os profiles na tela

  const listaInfos = infos.map((profile) => {
    return <ListaProfile>

      <PhotoProfile src={profile.photo} alt="foto usuário" />
      <h2>{profile.name}, {profile.age}</h2>
      <h4>{profile.bio}</h4>
      <ImagemCoracao>
        <button onClick={() => addMatches()}><img src={'https://www.shareicon.net/data/512x512/2016/01/10/700859_heart_512x512.png'} /></button>
        <button onClick={() => getProfile()}><img src={'https://cdn-icons-png.flaticon.com/512/39/39846.png'} /></button>
      </ImagemCoracao>
    </ListaProfile>
  })


  // CHOOSE PERSON

  const [choice, setChoice] = useState(false)
  const [id, setId] = useState("")

  //post para quando curte e add a lista de matches

  const addMatches = () => {

    const body = {
      id: id,
      choice: choice
    }

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/priscilla/choose-person/', body)
      .then((response) => {
        alert('deu certo!');
        getProfile();
        setChoice(true);
        if (choice === true){
          return setId([response.data.matches])}
        
      })
      .catch((error) => {
        // alert('deu errado')
        console.log(error.response.data)
      })
    }

  //o set choice vai depender do que a pessoa escolher e ele vai ser relacionado ao id // choice começa False
  
  




  // alternar entre telas  ??????????????????????????

  // const [tela, setTela] = useState(1)

  // const onClickChamaMatches = () => {
  //   setTela("matches")
  // }


  // const onClickTrocarDeTela = () => {
  //   setTela({ tela: tela === "app" ? "matches" : "app" });
  // }

  // const mudaTela = () => {
  //   switch (tela) {
  //     case 1:
  //       return <App />
  //     case 2: return <Matches />
  //     default:
  //       return <App />
  //   }
  // }

  // onClickTrocarDeTela = () => {
  //   setTela({tela === "app" ? "lista matches" : "app" })
  // }

  // const irParaProximaTela = () => {
  //   setTela(tela + 1)
  // }

  // const voltarTela = () => {
  //   setTela(tela - 1)
  // }


  return (
    <ContainerGeral>

      <ImagemLogo src={logo} />

      {/* <button onClick={irParaProximaTela}>Lista Matches</button>
      <button onClick={voltarTela}>Voltar</button>
      {mudaTela} */}


      {listaInfos}



    </ContainerGeral>
  );

}

export default App;
