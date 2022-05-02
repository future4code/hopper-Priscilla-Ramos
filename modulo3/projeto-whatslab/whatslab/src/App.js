import logo from './logo.svg';
import React from 'react';
import styled from "styled-components";

const CardGeral = styled.div`
  display: flex;
  justify-content: center;
`
const CardComponents = styled.p`
  flex-direction:column;
  justify-content: flex-end;
  height: 600px;
  width: 550px;
  border: 1px solid black;
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
`

const Negrito = styled.p`
  font-weight: bold;
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

    const novasMsgs = [...this.state.msg]
    novasMsgs.push(novaMsg)
    this.setState({ msg: novasMsgs })
  }

  onChangeRemetente = (event) => {
    this.setState({ remetente: event.target.value })
  }

  onChangeConteudo = (event) => {
    this.setState({ conteudoMsg: event.target.value })
  }

  listaDeMensagens = this.state.msg.map((message) => {
    return (
      <div>
        <Negrito> {message.remetente} : {message.conteudoMsg} </Negrito>
      </div>
    )
  })

  render() {

    return (
      < CardGeral>

        <CardComponents> {this.listaDeMensagens} </CardComponents>

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