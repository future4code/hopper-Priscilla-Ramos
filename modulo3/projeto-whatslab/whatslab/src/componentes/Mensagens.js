import React from "react";
import App from "../App";

class Mensagens extends React.Component {

    state = {
        msg: [
            remetente = '',
            conteudoMsg = '',
            imprimeRemetente = '',
            imprimeMensagem = '',
        ]
    }

    onChangeRemetente = (event) => {
        this.setState({ remetente: event.target.value })
    }

    onChangeConteudo = (event) => {
        this.setState({ conteudoMsg: event.target.value })
    }

    adicionaMsgNova = () => {
        const novaMsg = {
            remetente: this.state.imprimeRemetente,
            conteudoMsg: this.state.imprimeMensagem
        };
        
        const novasMsgs = [...this.state.msg, novaMsg];
        this.setState({ msg: novasMsgs });
    };

render() {

    return (
        <div>
            <h4>Mensagem</h4>


            <input placeholder="Remetente"
                value={this.state.remetente}
                onChange={this.onChangeRemetente}
            />


            <input placeholder="Conteudo"
                value={this.state.conteudoMsg}
                onChange={this.onChangeConteudo}
            />

            <button onClick={this.adicionaMsgNova}>Enviar</button>

        </div>
    )
}
}

export default Mensagens;