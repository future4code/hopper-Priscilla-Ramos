import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { URL_BASE } from "../components/UrlBase";
import { useParams } from "react-router-dom";
import useForm from "../Hooks/useForm"
import Button from '@mui/material/Button';

function ApplicationFormPage() {

    const { form, onChange, cleanFields } = useForm({nome: "", age: "", text: "", profession: "", country: ""})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const { id } = useParams()
  

    const apllyToTrip = (event) => {
        event.preventDefault();
        setLoading(true);

        const body = {
            "name": form.nome,
            "age": form.age,
            "applicationText": form.text,
            "profession": form.profession,
            "country": form.country
          }

        axios.post(`${URL_BASE}/trips/${id}/apply`, body)
            .then(() => {
                setLoading(false)
                confereAge()
                alert("Obrigada por se inscrever")
                cleanFields()
            })
            .catch((error) => {
                setLoading(false)
                setError(error.data)
                cleanFields()
            })
    }

    const confereAge = () => {
        if (form.age < 18) {
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

            {/* {`${nome}`} */}
            <form onSubmit={apllyToTrip}>
                <input value={form.nome}
                    onChange={onChange}
                    placeholder="Digite seu nome completo"
                    name="nome"
                    required
                    ></input>
                <input value={form.age}
                    onChange={onChange}
                    placeholder="Digite sua idade"
                    name="age"
                    required
                    ></input>
                <input value={form.text}
                    onChange={onChange}
                    placeholder="Digite o porquê quer viajar"
                    name="text"
                    ></input>
                <input value={form.profession}
                    onChange={onChange}
                    placeholder="Digite sua profissão"
                    name="profession"
                    ></input>
                <input value={form.country}
                    onChange={onChange}
                    placeholder="Digite seu país"
                    name="country"
                    required
                    ></input>
                <Button>Apply</Button>
            </form>

        </div>
    )
}

export default ApplicationFormPage;
