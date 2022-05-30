import axios from "axios";
import React from "react";
import AddTrack from "./AddTrack"

export default class WatchPL extends React.Component {
    state = {
        cont: false
    }

    componentDidUpdate() {
        this.deletaPL()
    }

    //altera valor do cont//

    trocaValor = () => {
        this.setState({ cont: !this.state.cont })
    }

    //deleta da API//

    deletaPL = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}` //tem que ver pra puxar id//

        axios.delete(url, {
            headers: {
                Authorization: "priscilla-lucena-hopper"
            }
        })
            .then((response) => {
                console.log(response.data)
                alert('Playlist excluída!')
            })

            .catch((error) => {
                console.log(error.response)
                // alert('Erro: não foi possível deletar')
            })
    }

    render() {

        const listaPL = this.props.playlists.map((pl) => {

            return <div key={pl.playlists}>
                <li>{pl.name} <button onClick={() => this.trocaValor()}>+</button> </li>
                {this.state.cont === false ? "" : <AddTrack id={pl.id} />}
                <button onClick={() => this.deletaPL(pl.id)}>x</button>
            </div>

        })


        return (
            <div>
                <h3>Ver Playlists</h3>

                {listaPL}
                

            </div >
        )
    }
}
