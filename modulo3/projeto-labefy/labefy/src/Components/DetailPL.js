import axios from "axios";
import React from "react";

export default class DetailPL extends React.Component {

    state = {
        resposta: []
    }

    detalhesPL = async (playlistId) =>{

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`
        try{
            const response = await axios.get(url, {
                headers: {
                    Authorization: "priscilla-lucena-hopper"
                }
            }) 
            this.setState ({resposta: response.data.result.tracks})
            console.log(response.data.result.tracks)
        } catch (error) {
            console.log(error.response)
            alert ('Erro: não foi possível abrir detalhes')
        }
        
    }

    render () {

        

        return(
            <div>
                <h3>Detalhes Playlist</h3>
                <button onClick={this.props.pag1}>Voltar</button>
            </div>
        )
    }
}