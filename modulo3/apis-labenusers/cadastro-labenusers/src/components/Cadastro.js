import React from 'react';
import axios from 'axios'

class Cadastro extends React.Component {

    state = {
        cadastros: [],
    valorInputName: '',
    valorInputEmail: ''
    }

    componentDidMount = () => {
        this.pegaUser()
    }

    // addUser = () =>{
    //     const newUser = {
    //         name: this.state.valorInputName,
    //         email: this.state.valorInputEmail
    //     }

    //     const newUsers = [...this.cadastro, newUser]

    //     this.setState({cadastros: newUsers})
    // }

    // onChangeUserName = (event) => {
    //    this.setState({ valorInputName: event.target.value });
    // }

    // onChangeUserEmail = (event) => {
    //    this.setState({ valorInputEmail: event.target.value });
    // }

    pegaUser = () => {

        const body = {
            id: "",
            name: ""
        }

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: "priscilla-lucena-hopper"
            }
        })
        .then((response) => {
            this.setState({cadastros: response.data.result.list })
        })
        .catch((error) => {
            console.log(error.response.data)
        })

    }


    cadastraUser = () => {
   
       const body = {
            name: '',
            email: ''
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "priscilla-ramos-hopper"
            }
        })
             .then((response) => {
                alert('Usuário criado com sucesso!')
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }

    render() {

        const novoCadastro = this.state.cadastros.map((cad)=>{
            return <p>{cad.name} - {cad.email}</p>
        })

        return (
            <div>
                {novoCadastro}
                <input> Nome:</input> 
                <button onClick={this.cadastraUser()}>Adicionar</button> 
                <input>E-mail:</input>
                
            </div>
        );
    }
}

export default Cadastro;