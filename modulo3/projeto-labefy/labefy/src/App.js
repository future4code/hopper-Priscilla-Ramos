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
  }

  escolherTela = () => {
    switch (this.state.telaAtual){
      case "addPL":
      return <AddPL/>
      case "addTrack":
        return <AddTrack/>
      case  "detail":
        return <DetailPL/>
      case "watch":
        return <WatchPL/>
      case "spotify":
        return <Spotify/>
      default:
        return <AddPL/>
  }}

  mudaTela = (nomeTela) => {
    this.setState({telaAtual: nomeTela})
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
        {this.escolherTela ()}
      </div>
    )
  }
}

export default App;
