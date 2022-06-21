import { useNavigate } from "react-router-dom";

const Header = () =>{

    const navigate = useNavigate ()

    return (
        <div>
            <button>Home</button>
            <button>Admin Page</button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    )
}

export default Header;