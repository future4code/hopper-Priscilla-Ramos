import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {

    post: [{
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },

    {
      nomeUsuario: 'robertinho',
      fotoUsuario: 'https://i.picsum.photos/id/744/536/354.jpg?hmac=bSwcAxDxfkwDQOJVwmXCbVdtrDKEo5SBPK1ccKLzQm4',
      fotoPost: 'https://i.picsum.photos/id/742/536/354.jpg?hmac=tp8K-JsAUq02CLW7KTAa46dW_EmhZRZCP_jJZ1vUKnI'
    },

    {
      nomeUsuario: 'bananinha',
      fotoUsuario: 'https://i.picsum.photos/id/782/536/354.jpg?hmac=eWN0fyMjNQNklPhoPoqUarvKzjk7zYoevQGyFR6NaX0',
      fotoPost: 'https://i.picsum.photos/id/78/536/354.jpg?hmac=r2RsVtx7T7KiXrJJGr0TF4NwbusRlpzbYTz8juHdEE4'
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

    const listaDeComponentes = this.state.post.map((posts) => {
      return (
        <p>
          {posts.nomeUsuario} - {posts.fotoUsuario}- {posts.fotoPost}
        </p>
      );
    });

    return (

      <MainContainer>
        <Post />
        <div>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />

          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUser}
            placeholder={"Foto User"}
          />

          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />

        </div>

        <button onClick={this.adicionaPost}>Adicionar</button>

      </MainContainer>
    );
  }
}











export default App;
