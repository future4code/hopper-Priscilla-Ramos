import logo from './logo.svg';
import React from 'react';
import styled from "styled-components";
import background from './img/papeldeparede.jpg'
import Contatos from './components/Contatos'

const CardGeral = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 450px 650px;
  background-color: #AEEEEE;
  border: 1px solid black;
`

const CardComponents = styled.p`
  flex-direction:column;
  justify-content: flex-end;
  height: 600px;
  width: 550px;
  
  `

const CardConteudo = styled.input`
  width: 24vw;
`

const CardRemetente = styled.input`
  width: 10vw;
`

const Footer = styled.div`
  height: 50px;
  margin: auto;
  bottom: 0;
  position: fixed;
  margin-left: 0px;
  left: 500px;
`

const Negrito = styled.div`
  font-weight: bold;
`

const ConteudoMsgs = styled.div`
  margin-left: 1vw;
`

const CardMensagem = styled.p`
  display: flex;
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
  border: 2px solid #8B795E;
  width: 20vw;
  height: 5vh;
  border-radius: 10px 20px;
  background-color: #FFEFDB;
`

class App extends React.Component {

  state = {
    msg: [{
      remetente: '',
      conteudoMsg: '',
    }]
  }


  adicionaMsgNova = () => {

    const novaMsg = {
      remetente: this.state.remetente,
      conteudoMsg: this.state.conteudoMsg
    }

    const novasMsgs = [...this.state.msg, novaMsg]
    this.setState({ msg: novasMsgs })
  }

  onChangeRemetente = (event) => {
    this.setState({ remetente: event.target.value })
  }

  onChangeConteudo = (event) => {
    this.setState({ conteudoMsg: event.target.value })
  }

 setValor = {
    remetente: '',
    conteudoMsg: '',
  }
  

  render() {
   
    const listaDeMensagens = this.state.msg.map((message) => {
      return (
        <CardMensagem>
          <Negrito> {message.remetente} : </Negrito>  
          <ConteudoMsgs>{message.conteudoMsg} </ConteudoMsgs>
        </CardMensagem> 
      )
    })

    return (
      < CardGeral>

        <Contatos />

        <CardComponents> {listaDeMensagens} </CardComponents>

        <Footer>
          <CardRemetente
            placeholder="Remetente"
            value={this.state.remetente}
            onChange={this.onChangeRemetente}
          />

          <CardConteudo
            placeholder="Conteudo"
            value={this.state.conteudoMsg}
            onChange={this.onChangeConteudo}
          />

          <button onClick={this.adicionaMsgNova}>Enviar</button>
        </Footer>


      </CardGeral>
    )
  }
}

export default App;