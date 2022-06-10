import axios from "axios";
import React, {useEffect, useState} from "react";


export default function Matches() {

    //renderiza na tela na primeira renderização

    useEffect(() => { getMatches() }, []);

    
    //tela matches e 
    
    const [matches, setMatches] = useState([])

    //puxa os matches dados da API

    const getMatches = () => {

        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/priscilla/matches')

            .then((response) => {
                setMatches(response.data.matches)
            })
            .catch((error) => {
                console.log(error.response)
            })
    };

    //map para renderizar os matches

    const ListaMatch = matches.map((match) => {
        return <div>
            <img src={match.photo} alt="foto usuário" />
            <h2>{match.name}</h2>,
            
        </div>
    })

    console.log(matches)

    return (
        <div>
            <h1>Matches</h1>
            {ListaMatch}
            {/* <button onClick={props.voltarTela}>Voltar</button> */}
        </div>
    )
}