import React from 'react';
import axios from 'axios';

class Cadastro extends React.Component {

    state = {
        valorInputName: "",
        valorInputEmail: "",
    }

    //joga o valor do input para o estado//

    onChangeUserName = (event) => {
        this.setState({ valorInputName: event.target.value });
    }

    onChangeUserEmail = (event) => {
        this.setState({ valorInputEmail: event.target.value });
    }


    //cadastra novo usuário na API//

    cadastraUser = () => {

        const body = {
            name: this.state.valorInputName,
            email: this.state.valorInputEmail
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "priscilla-ramos-hopper"
            }
        })
            .then(() => {
                this.setState({ valorInputName: "" })
                this.setState({ valorInputEmail: "" })
                alert('Usuário criado com sucesso!')
            })
            .catch((error) => {
                console.log(error.response.data)
                this.setState({ valorInputName: "" })
                this.setState({ valorInputEmail: "" })
                alert('Erro: não foi possivel criar!')
            })
    }

    render() {

        return (
            <div>
                <h3>Tela Cadastro</h3>
                <button onClick={this.props.paginaUm}>Trocar Tela</button>
                <div>
                    <input value={this.state.valorInputName}
                        onChange={this.onChangeUserName}
                        placeholder='digite seu nome' />

                    <input value={this.state.valorInputEmail}
                        onChange={this.onChangeUserEmail}
                        placeholder='digite e-mail' />

                    <button onClick={this.cadastraUser}>Adicionar</button>
                </div>

            </div>

        );
    }
}

export default Cadastro;