import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Etapa1 } from "./components/Etapa1";
import { Etapa2 } from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
import { Etapa4 } from "./components/Etapa4";

const Main = styled.div`
  margin-top: 50px;
  border-radius: 10px;
  height: 500px;
  width: 480px;
  border: solid 2px black;
  margin-left: auto;
  margin-right: auto;
  background-color: #f1f1f1;
`
const Botao = styled.button `
  border-radius: 5px;
  background-color: white;
  border: 1px solid gray;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-top: 80px;

  :hover{
    background-color: lightblue;
    font-weight: bold;
  }
`
class App extends React.Component{
    state = {
      telaAtual: 1,
    }

    renderizarTela = () => {
      switch (this.state.telaAtual) {
        case 1:
          return <Etapa1 />
        case 2:
          return <Etapa2 />
        case 3:
          return <Etapa3 />
        case 4:
          return <Etapa4 />  
      }
    }

    proximaTela = () => {
      this.setState({telaAtual: this.state.telaAtual + 1})
    }

  render(){
    return ( 
      <Main> 
        {this.renderizarTela()}
        {/* <Etapa2></Etapa2> */}
        {/* <Etapa1></Etapa1> */}
        {/* <Etapa3></Etapa3> */}
        {/* <Etapa4></Etapa4> */}
        {this.state.telaAtual < 4 &&(
        <Botao onClick={this.proximaTela}>Próxima Etapa</Botao>)}
      </Main>

      
    )
  }
}

  
export default App;