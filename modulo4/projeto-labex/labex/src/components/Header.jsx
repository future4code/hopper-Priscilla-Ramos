import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList, goToAdminTripsList, goToAdminTipsCreate, goToHome, } from "../Routes/RouteFunctions";
import Button from '@mui/material/Button';

export default function Header(props) {

    const navigate = useNavigate()

    const Header = (nome) => {
        switch (nome) {
            case "home":
                return <div>
                    <h2>HOME</h2>
                </div>
            case "trips detail":
                return <div>
                    <h2>DETALHES DAS VIAGENS</h2>
                    <Button onClick={() => goToAdminTripsList(navigate)}>Voltar</Button>
                </div>
            case "admin home":
                return <div>
                    <h2>ADMIN HOME</h2>
                    <Button onClick={() => goToLogin(navigate)}>Voltar</Button>
                    <Button onClick={() => goToAdminTipsCreate(navigate)}>Criar Viagem</Button>
                </div>
            case "create trip":
                return <div>
                    <h2>CRIAR VIAGEM</h2>
                    <Button onClick={() => goToAdminTripsList(navigate)}>Voltar</Button>
                </div>
            case "list trips":
                return <div>
                    <h2>LISTA DE VIAGENS</h2>
                    <Button onClick={() => goToHome(navigate)}>Voltar</Button>
                </div>
            case "login":
                return <div>
                    <h2>LOGIN</h2>
                    <Button onClick={() => goToHome(navigate)}>Voltar</Button>
                </div>
            case "forms":
                return <div>
                    <h2>FORMULÁRIO DE INSCRIÇÃO</h2>
                    <Button onClick={() => goToTripsList(navigate)}>Voltar</Button>
                </div>
        }
    };

    return (
        <div>
            {Header(props.nome)}
        </div>
    )
}

