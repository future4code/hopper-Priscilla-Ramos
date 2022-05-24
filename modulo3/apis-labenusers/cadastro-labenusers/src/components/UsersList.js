import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Lista = styled.li`
   margin: 3vh;
`

const ContainerGeral = styled.div`
    /* align-items: center; */
`

class UsersList extends React.Component {

    state = {
        cadastros: [],
    }


    //renderiza os usuários cadastrados na API na tela na inicialização da mesma//

    componentDidMount = () => {
        this.pegaUser()
    }


    //traz informações da API sobre o usuário//

    pegaUser = () => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "priscilla-ramos-hopper"
            }
        })
            .then((response) => {
                this.setState({ cadastros: response.data })
            })
            .catch((error) => {
                console.log(error.response.data)
            })

    }


    //deleta usuário da Api//

    deletaUser = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "priscilla-ramos-hopper"
            }
        })
            .then(() => {
                alert('Usuário exluído com sucesso!')
                this.pegaUser()
            })
            .catch((error) => {
                console.log(error.response.data)
                alert('Erro: não foi possivel excluir!')
            })
    }

    render() {

        const listaCadastro = this.state.cadastros.map((cad) => {
            return <Lista key={cad.id}>
                {cad.name}{' '}
                <button onClick={() => this.deletaUser(cad.id)}>x</button>
            </Lista>
        })


        return (

            <ContainerGeral>
                <h3>Tela de Lista</h3>
                <button onClick={this.props.paginaDois}>Trocar Tela</button>
                {listaCadastro}
            </ContainerGeral>

        );
    }


}

export default UsersList;