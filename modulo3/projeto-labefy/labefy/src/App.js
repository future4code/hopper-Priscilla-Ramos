import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import AddPL from "./Components/AddPL";
import DetailPL from "./Components/DetailPL";
import WatchPL from "./Components/WatchPL";


class App extends React.Component {

  state = {
    tela: 1,
    playlists: []
  }

  componentDidMount() {
    this.pegaPL()
  }

  //onclick para mudar tela//

  irParaProximaTela = () => {
    this.setState({ tela: this.state.tela + 1 })
  }

  voltarTela = () => {
    this.setState({ tela: this.state.tela - 1})
  }

  //func para mudar entre telas//
  
  mudaTela = () => {
    switch (this.state.tela) {
      case 1:
        return <AddPL />
      case 2:
        return <WatchPL
        playlists={this.state.playlists}
        tela={this.state.tela}
        pegaPl={this.pegaPL}
        />
      case 3:
        return <DetailPL 
        playlists={this.state.playlists}
        listaDeId = {this.listaDeId}
        />
      default:
        return <AddPL />
    }
  }

  //puxa as playlists criadas//

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

  //função pra passar id pra Detalhes//

  listaDeId = this.state.playlists.filter((pl)=>{
    return <span>{pl.id}</span>
  })

  render() {
    
 
    return (
      <div>
        <div>

          <button onClick={this.irParaProximaTela}>Próxima</button>
          <button onClick={this.voltarTela}>Voltar</button>
          
        </div>
        {this.mudaTela()}
         
      </div>
    )
  }
}

export default App;
