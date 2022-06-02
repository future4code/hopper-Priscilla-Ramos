import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Forms = styled.input`
  box-shadow: 10px 5px 5px black;
  border-radius: 30px;
  text-align: center; 
  margin-top: 5vh;
`

const BotaoAdd = styled.button`
  border-radius: 30px;
  margin-top: 2vh;
`

class App extends React.Component {

  state = {

    arrayPost: [{
      nomeUsuario: 'paulinha',
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: 'https://picsum.photos/200/150'
    },

    {
      nomeUsuario: 'robertinho',
      fotoUsuario: 'https://i.picsum.photos/id/744/536/354',
      fotoPost: 'https://i.picsum.photos/id/742/536/354'
    },

    {
      nomeUsuario: 'bananinha',
      fotoUsuario: "https://i.picsum.photos/id/782/536/354",
      fotoPost: 'https://i.picsum.photos/id/78/536/354'
    }],

    valorInputNome: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: '',

  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novaPostagem = [...this.state.post, novoPost];

    this.setState({ post: novaPostagem });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoUser = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };


  render() {

    const listaDeComponentes = this.state.arrayPost.map((posts) => {
      return (
       <div>
          {posts.fotoUsuario} - {posts.nomeUsuario} - {posts.fotoPost},
      </div>
      );
    });

    return (

      <MainContainer>

        <Post> {listaDeComponentes} </Post>

          <div>
            <Forms
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
            />

            <Forms
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUser}
              placeholder={"Foto User"}
            />

            <Forms
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Foto Post"}
            />
          </div>
        
        <BotaoAdd onClick={this.adicionaPost}>Adicionar</BotaoAdd>

      </MainContainer>

    );
  }
}











export default App;
