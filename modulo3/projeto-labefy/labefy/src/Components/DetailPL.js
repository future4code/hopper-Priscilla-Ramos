import React from "react";

export default class DetailPL extends React.Component {
    render () {
        return(
            <div>
                <h3>Detalhes Playlist</h3>
                <button onClick={this.props.pag1}>Voltar</button>
            </div>
        )
    }
}