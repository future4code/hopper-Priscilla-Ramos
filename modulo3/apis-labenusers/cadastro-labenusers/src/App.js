import React from 'react';
import Cadastro from './components/Cadastro';
import styled from 'styled-components';
import UsersList from './components/UsersList';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
`

class App extends React.Component {

  state = {
    telaAtual: "cadastro",
  }


  //função que troca de tela//

  onClickTrocarDeTela = () => {
    this.setState({telaAtual: this.state.telaAtual === "cadastro" ? "lista" : "cadastro" })
  }

  render() {

    
    return (
      <MainContainer>

        {this.state.telaAtual === "cadastro" 
        ? <Cadastro paginaUm={this.onClickTrocarDeTela}/> 
        : <UsersList paginaDois={this.onClickTrocarDeTela}
        />
        }

      </MainContainer>
    );
  }
}

export default App;
