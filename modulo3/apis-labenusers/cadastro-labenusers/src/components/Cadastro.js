import React from 'react';
import axios from 'axios'

class Cadastro extends React.Component {

    render() {

        return (
            <div>
                <div>
                    <input value={this.props.valorInputName} 
                    onChange={this.props.onChangeUserName} 
                    placeholder='digite seu nome'/>

                    <input value={this.props.valorInputEmail} 
                    onChange={this.props.onChangeUserEmail} 
                    placeholder='digite e-mail'/>

                    <button onClick={this.props.cadastraUser}>Adicionar</button>
                </div>

            </div>
        
        );
    }
}

export default Cadastro;