import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { URL_BASE } from "../components/UrlBase";
import { useParams } from "react-router-dom";

function ApplicationFormPage(props) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [text, setText] = useState("");
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const {id} = useParams()
  

    const apllyToTrip = () => {

        const body = {
            "name": name,
            "age": age,
            "applicationText": text,
            "profession": profession,
            "country": country
        }

        setLoading(true);

        axios.post(`${URL_BASE}/trips/${id}/apply`, body)
            .then(() => {
                setLoading(false)
                confereAge()
                alert("Obrigada por se inscrever")
                limpaInput()
            })
            .catch((error) => {
                setLoading(false)
                setError(error.response.data)
                limpaInput()
            })
    }

//  console.log(id)

    const limpaInput = () => {
        return setName(""),
            setAge(""),
            setText(""),
            setProfession(""),
            setCountry("")
    }

    const confereAge = () => {
        if (age < 18) {
            alert("Você não pode se inscrever, é menor de idade!")
        }
    }

    return (
        <div>
           <Header 
           nome={"forms"}
           />
           
            {loading && <h3>Carregando...</h3>}
            {!loading && error && <p>Deu Ruim!</p>}
            

            <form onSubmit={apllyToTrip}>
                <input value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Digite seu nome completo"></input>
                <input value={age}
                    onChange={(e)=>setAge(e.target.value)}
                    placeholder="Digite sua idade"></input>
                <input value={text}
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Digite o porquê quer viajar"></input>
                <input value={profession}
                    onChange={(e)=>setProfession(e.target.value)}
                    placeholder="Digite seua profissão"></input>
                <input value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                    placeholder="Digite seu país"></input>
                
                <button onClick={() => apllyToTrip()}>Apply</button>
            </form>
                        
        </div>
    )
}

export default ApplicationFormPage;
