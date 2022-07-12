import React from "react";
import ApplicationFormPage from "./ApplicationFormPage";
import { useNavigate } from "react-router-dom";
import AdminHomePage from "./AdminHomePage";
import useRequestData from "../components/UseRequestData";
import Header from "../components/Header";
import { goToAplly } from "../Routes/RouteFunctions";


// const CardViagens = styled.span`
/* display: flex; */
/* justify-content: center; */
/* border: 2px solid grey; */
//  `    
/* TA QUEBRANDO O CÓDIGO!!! */

export default function ListTripsPage() {

    const navigate = useNavigate()

    const [data, loading, error] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/priscilla-lucena-hopper/trips`)

    const listaViagens = data && data.map((viagem) => {

        return <div key={viagem.id}>
            <h3>Viagem: {viagem.name}</h3>
            <p><strong>Descrição:</strong> {viagem.description}</p>
            <p><strong>Planeta:</strong> {viagem.planet}</p>
            <p><strong>Data:</strong> {viagem.date}</p>
            <p><strong>Duração:</strong> {viagem.durationInDays}</p>
            <button onClick={() => goToAplly(navigate)}>Aplicar</button>
        </div>
    })

    const listaId = data && data.map(data => data.id);

    const passaInfosAppForm = () => {
        return <ApplicationFormPage
            id={listaId}
        />
    }

    const passaInfosAdminPage = () => {
        <AdminHomePage
            id={listaId}
            lista={listaViagens}
        />
    }

    return (
        <div>
            <Header
            nome={"list trips"}
            />

            {listaViagens}
            {passaInfosAppForm()}
            {passaInfosAdminPage()}
           
        </div>
    )
}