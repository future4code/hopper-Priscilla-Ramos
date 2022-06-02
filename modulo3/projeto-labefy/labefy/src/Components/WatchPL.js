import axios from "axios";
import React from "react";
import AddTrack from "./AddTrack"


export default class WatchPL extends React.Component {
    state = {
        cont: false
    }

    componentDidMount () {
        // this.props.pegaPL
    }
    
    //altera valor do cont//

    trocaValor = () => {
        this.setState({ cont: !this.state.cont })
    }

    //deleta da API//

    deletaPL = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}` 

        axios.delete(url, {
            headers: {
                Authorization: "priscilla-lucena-hopper"
            }
        })
            .then((response) => {
                console.log(response.data)
                alert('Playlist excluída!')
                this.props.pegaPL()
            })

            .catch((error) => {
                console.log(error.response)
            })
    }


    render() {

        const listaPL = this.props.playlists.map((pl) => {

            return <div key={pl.play}>
                <li>{pl.name} <button onClick={() => this.trocaValor()}>+</button> </li>
                {this.state.cont === false ? "" : <AddTrack id={pl.id} />}
                <button onClick={() => this.deletaPL(pl.id)}>x</button>
               
            </div>

        })


        return (
            <div>
                <h3>Ver Playlists</h3>

                {listaPL}
                {this.props.pegaPL}
                

            </div >
        )
    }
}
