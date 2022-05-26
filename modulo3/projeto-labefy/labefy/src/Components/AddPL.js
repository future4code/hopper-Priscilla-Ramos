import React from "react";
import axios from "axios";

export default class AddPL extends React.Component {

    state = {
        valorInputName: ""
    }

    //altera o estado pelo input//

    onChangeInputNamePL = (event) => {
        this.setState({ valorInputName: event.target.value })
    }

    //add playlist//

    addPL = async () => {
        let url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`

        let body = {
            name: this.state.valorInputName
        }

        try {
            const response = await axios.post(url, body, {
                headers: {
                    Authorization: "priscilla-lucena-hopper"
                }
            })
            console.log(response)
            this.setState({ valorInputName: "" })
            alert("Playlist criada com Sucesso!")

        } catch (error) {
            console.log(error.response)
            alert("Erro: Não foi possível criar a Playlist!")
        }
    }

    

    render() {

    
        return (
            <div>
                <h3>Tela Add Playlist</h3>

                <div>
                    <input
                        value={this.state.valorInputName}
                        onChange={this.onChangeInputNamePL}
                        placeholder='digite nome da Playlist'
                    />

                    <button onClick={this.addPL}> Adicionar</button>
                </div>
            </div>
        )
    }
}

