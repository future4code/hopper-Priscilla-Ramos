import axios from "axios";
import React from "react";
import App from "../App";

export default class DetailPL extends React.Component {

    state = {
        musicas: [],
        cont: false
    }

      //altera valor do cont//meio inutil, acho

    //   trocaValor = () => {
    //     this.setState({ cont: !this.state.cont })
    // }

    //chama as músicas que tem em cada playlist//

    detalhesPL = () => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`

        axios.get(url, {
            headers: {
                Authorization: "priscilla-lucena-hopper"
            }
        }).then((response) => {
            this.setState({ musicas: response.data.result.tracks })
            console.log(response.data.result.tracks)
        }).catch((error) => {
            console.log(error.response)
            alert('Erro: não foi possível abrir detalhes')
        })
    }
 


    render() {
       

        const listaMusicas = this.state.musicas.map((mus) => {
            return <div key={mus.music}>
             <li>{mus.name} - {mus.artist} - {mus.url} </li>
            </div>
        })

        return (
            <div>
                <h3>Detalhes Playlist</h3>
                {listaMusicas}
            </div>
        )
    }
}