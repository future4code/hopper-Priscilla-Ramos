import React from 'react';
import axios from 'axios';
import Cadastro from './components/Cadastro';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3vh;
  margin-top: 5vh;
`

class App extends React.Component {

  state = {
    cadastros: [],
    valorInputName: "",
    valorInputEmail: ""
  }

  //joga o valor do input para o estado//

  onChangeUserName = (event) => {
    this.setState({ valorInputName: event.target.value });
    console.log(this.state.valorInputName)
  }

  onChangeUserEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  }


  //traz informações da API sobre o usuário//

  pegaUser = () => {

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: "priscilla-ramos-hopper"
      }
    })
      .then((response) => {
        this.setState({ cadastros: response.data })
      })
      .catch((error) => {
        console.log(error.response.data)
      })

  }

  //renderiza os usuários cadastrados na API na tela na inicialização da mesma//

  componentDidMount = () => {
    this.pegaUser()
  }


  //cadastra novo usuário na API//

  cadastraUser = () => {

    const body = {
      name: this.state.valorInputName,
      email: this.state.valorInputEmail
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "priscilla-ramos-hopper"
      }
    })
      .then(() => {
        this.setState({ valorInputName: '' })
        this.setState({ valorInputEmail: '' })
        this.pegaUser();
        alert('Usuário criado com sucesso!')
      })
      .catch((error) => {
        console.log(error.response.data)
        alert('Erro: não foi possivel criar!')
      })
  }

  //deleta usuário da Api//

  deletaUser = () => {

    axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", {
      headers: {
        Authorization: "priscilla-ramos-hopper"
      }
    })
      .then(() => {
        alert('Usuário exluído com sucesso!')
      })
      .catch((error) => {
        console.log(error.response.data)
        alert('Erro: não foi possivel excluir!')
      })
  }

  renderizaNaTela = () => {
    return <Cadastro
      valorInputName={this.state.valorInputName}
      onChangeUserName={this.onChangeUserName}
      valorInputEmail={this.state.valorInputEmail}
      onChangeUserEmail={this.onChangeUserEmail}
      cadastraUser={this.cadastraUser}
    />
  }




  render() {

    const listaCadastro = this.state.cadastros.map((cad) => {
      return <li key={cad.id}>
        {cad.name}{' '}
        <button onClick={this.deletaUser}>x</button>
      </li>

    })

    return (
      <MainContainer>

        {this.renderizaNaTela()}
        {listaCadastro}


      </MainContainer>
    );
  }
}

export default App;
