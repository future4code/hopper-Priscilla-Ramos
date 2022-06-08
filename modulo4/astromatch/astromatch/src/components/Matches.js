import axios from "axios";
import React, {useState} from "react";


export default function Matches() {

    const [matches, setMatches] = useState([])

    //tela matches e botões

    const getMatches = () => {

        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/priscilla/matches")

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
            <h1>{match.name}</h1>,
            <p>{match.bio}</p>
        </div>
    })

    console.log(matches)

    return (
        <div>
            <h1>Matches</h1>
            {ListaMatch}
        </div>
    )
}