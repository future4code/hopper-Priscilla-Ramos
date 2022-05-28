import axios from "axios";
import React from "react";
import AddTrack from "./AddTrack"

export default class WatchPL extends React.Component {
    state = {
        cont: false
    }
    
    trocaValor = () =>{
        this.setState({cont: !this.state.cont})
    }

    render() {

        const listaPL = this.props.playlists.map((pl) => {
            
            return <div>
                <li>{pl.name} <span onClick={()=>this.trocaValor()}>+</span> </li>
                {this.state.cont === false? "" : <AddTrack id = {pl.id}/>} 
            </div>
            
        })


        return (
            <div>
                <h3>Watch Playlist</h3>

                {listaPL}
               
            </div >
        )
    }
}
