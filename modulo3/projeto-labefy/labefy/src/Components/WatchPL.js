import axios from "axios";
import React from "react";

export default class WatchPL extends React.Component {

    state = {
        resultado: [],
        
    }

    componentDidMount() {
        this.pegaPL()
    }

    //função chama pl criadas//

    pegaPL = () => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: "priscilla-ramos-hopper"
            }
        })
            .then((response) => {
                this.setState({ resultado: response.data })
            })
            .catch((error) => {
                console.log(error.response.data)
                alert('não foi possível mostrar a lista')
            })

    }

    render() {

        const listaPl = this.state.resultado.map((playlist) => {
            return <li key={playlist.id}>
                {`Nome:` + playlist.name}
            </li>
        })


        return (
            <div>
                <h3>Watch Playlist</h3>

                {this.listaPl}
            </div >
        )
    }
}
