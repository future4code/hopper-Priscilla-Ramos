import React, { useEffect, useState } from "react";
import api from "../components/UrlBase";
import Header from "../components/Header";

function ApplicationFormPage(props) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [text, setText] = useState("");
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")


    const apllyToTrip = (id) => {

        const body = {
            "name": name,
            "age": age,
            "applicationText": text,
            "profession": profession,
            "country": country
        }

        api.post(`/trips/${id}/apply`, body)
            .then(() => {
                confereAge()
                console.log("deu certo!!")
                limpaInput()
            })
            .catch((error) => {
                console.log(error.response.data)
                limpaInput()
            })
    }

 
    const limpaInput = () => {
        return setName(""),
            setAge(""),
            setText(""),
            setProfession(""),
            setCountry("")
    }

    const confereAge = () => {
        if (age < 18) {
            alert("voce nao pode se inscrever, e menor de idade")
        }
    }

    return (
        <div>
           <Header 
           nome={"forms"}
           />
           
            <form>
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
                
                <button onClick={() => apllyToTrip(props.id)}>Apply</button>
            </form>
                        
        </div>
    )
}

export default ApplicationFormPage;
