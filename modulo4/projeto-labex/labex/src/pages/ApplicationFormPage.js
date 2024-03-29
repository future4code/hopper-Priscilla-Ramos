import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { URL_BASE } from "../components/UrlBase";
import { useParams } from "react-router-dom";
import useForm from "../Hooks/useForm"
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';

function ApplicationFormPage() {

    const { form, onChange, cleanFields } = useForm({ name: "", age: "", text: "", profession: "", country: "" })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const { id } = useParams()

    console.log(form.country)
    console.log(form.name)
    console.log(form.age)
    console.log(form.text)
    console.log(form.profession)

    const apllyToTrip = (event) => {
        event.preventDefault();
        setLoading(true);

        axios.post(`${URL_BASE}/trips/${id}/apply`, form)
            .then(() => {
                setLoading(false)
                alert("Obrigada por se inscrever")
                cleanFields()
            })
            .catch((error) => {
                setLoading(false)
                setError(error.data)
                cleanFields()
            })
    };


    return (
        <div>
            <Header
                nome={"forms"}
            />

            {loading && <CircularProgress />}
            {!loading && error && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>check it out!</strong>
            </Alert>}

            <form onSubmit={apllyToTrip}>
                <input
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome"}
                    name={"name"}
                    required
                ></input>
                <input
                    value={form.age}
                    onChange={onChange}
                    placeholder={"Idade"}
                    name={"age"}
                    min={18}
                    required
                ></input>
                <input
                    value={form.text}
                    onChange={onChange}
                    placeholder={"Porquê quer viajar"}
                    name={"text"}
                ></input>
                <input
                    value={form.profession}
                    onChange={onChange}
                    placeholder={"Profissão"}
                    name={"profession"}
                ></input>
                <input
                    value={form.country}
                    onChange={onChange}
                    placeholder={"País"}
                    name={"country"}
                    required
                ></input>

                <Button variant="outlined">Apply</Button>
            </form>

        </div >
    )
}

export default ApplicationFormPage;
