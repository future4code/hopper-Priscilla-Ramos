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
  render() {

    return (

      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'robertinho'}
          fotoUsuario={'https://i.picsum.photos/id/744/536/354.jpg?hmac=bSwcAxDxfkwDQOJVwmXCbVdtrDKEo5SBPK1ccKLzQm4'}
          fotoPost={'https://i.picsum.photos/id/742/536/354.jpg?hmac=tp8K-JsAUq02CLW7KTAa46dW_EmhZRZCP_jJZ1vUKnI'}
        />

        <Post
          nomeUsuario={'bananinha'}
          fotoUsuario={'https://i.picsum.photos/id/782/536/354.jpg?hmac=eWN0fyMjNQNklPhoPoqUarvKzjk7zYoevQGyFR6NaX0'}
          fotoPost={'https://i.picsum.photos/id/78/536/354.jpg?hmac=r2RsVtx7T7KiXrJJGr0TF4NwbusRlpzbYTz8juHdEE4'}
        />
        
      </MainContainer>
    );
  }
}











export default App;
