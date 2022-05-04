import React from "react";

class CursoSuperior extends React.Component {

    render() {
        return (
            <div>
                <h3>Curso Superior:</h3> 
                <div>
                    <input type='text'   />
                </div>

                <div>
                    <input type='text'   />
                </div>

                <button onChange={this.adicionaCurso}>Adicionar</button>
            </div>

        );
    }
}

export default CursoSuperior;