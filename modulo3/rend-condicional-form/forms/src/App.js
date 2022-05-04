import logo from './logo.svg';
import styled from "styled-components"
import React from 'react';
import DadosGerais from './components/DadosGerais';
import CursoSuperior from './components/CursoSuperior';
import SuperiorIncompleto from './components/SuperiorIncompleto';
import Final from './components/Final';

class App extends React.Component {

  state = {
      etapa: 1,
 }

    
    irParaProximaEtapa = () => {
          this.setState({ etapa: this.state.etapa + 1})
    }

    render() {

      const renderizaEtapa = () => {
        switch (this.state.etapa) {
          case 1: 
            return <DadosGerais />;
  
          case 2:
            return <CursoSuperior />;
          
          case 3:
            return <SuperiorIncompleto />
            
          case 4:
            return <Final />
                 
        }
      }
  

    return (
      <div >
        
        {renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}

export default App;
