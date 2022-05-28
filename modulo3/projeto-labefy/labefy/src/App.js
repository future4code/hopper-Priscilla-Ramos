import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import AddPL from "./Components/AddPL";
import AddTrack from "./Components/AddTrack";
import DetailPL from "./Components/DetailPL";
import Spotify from "./Components/Spotify";
import WatchPL from "./Components/WatchPL";


class App extends React.Component {

  state = {
    telaAtual: "addPL",
    tela: 0,
    playlists: []
  }

  componentDidMount() {
    this.pegaPL()
}

  // escolherTela = () => {
  //   switch (this.state.telaAtual){
  //     case "addPL":
  //     return <AddPL/>
  //     case "addTrack":
  //       return <AddTrack/>
  //     case  "detail":
  //       return <DetailPL/>
  //     case "watch":
  //       return <WatchPL/>
  //     case "spotify":
  //       return <Spotify/>
  //     default:
  //       return <AddPL/>
  // }}

  mudaTela = () => {
    switch (this.state.tela) {
      case 0:
        return <WatchPL
          playlists={this.state.playlists} 
          tela = {this.state.tela}
          />
      

    }
  }

  pegaPL = () => {

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: "priscilla-lucena-hopper"
      }
    })
      .then((response) => {
        this.setState({ playlists: response.data.result.list })
        console.log(response.data.result.list)
      })
      .catch((error) => {
        console.log(error.response)
        alert('não foi possível mostrar a lista')
      })

  }
  render() {

    

    return (
      <div>
        <div>
          <button onClick={() => this.mudaTela("addPL")}>Home</button>
          <button onClick={() => this.mudaTela("addTrack")}>AddTrack</button>
          <button onClick={() => this.mudaTela("detail")}>Detail</button>
          <button onClick={() => this.mudaTela("watch")}>WatchPL</button>
          <button onClick={() => this.mudaTela("spotify")}>Spotify</button>
        </div>
        {this.mudaTela()}
      </div>
    )
  }
}

export default App;
