import React from 'react';
import PagCadastro from './Components/PagCadastro';
import PagListaUsuarios from './Components/PagListaUsuarios';
import styled from 'styled-components';

const Button = styled.button `
  border-radius: 5px;
  background-color: white;

  :hover{
    cursor: pointer;
  }
`

const DivButton = styled.div`
  text-align: center;
  padding: 10px;

`

const Main = styled.div`
  border: 2px solid gray;
  text-align: center;
  width: 450px;
  margin-left: auto;
  margin-right: auto;
  min-height: 300px;
  margin-top: 50px;
  background-color: lightgray;
`

const H2 = styled.h2`
  border-bottom: 2px gray solid;
`

export default class App extends React.Component {
  state = {
    trocarDePagina: "paginaCadastro"
  }

  trocarPagina = () => {
    if (this.state.trocarDePagina === "paginaCadastro") {
      this.setState({ trocarDePagina: "pagListaUsuario" })
    } else {
      this.setState({ trocarDePagina: "paginaCadastro" })
    }
  }

  render() {
    return (
      <Main>
        <H2>LabenUsers</H2>
        <DivButton>
          <Button onClick={this.trocarPagina}>Trocar de Pagina</Button>
          </DivButton>
        <div>
          {this.state.trocarDePagina === "paginaCadastro" ? <PagCadastro /> : <PagListaUsuarios />}
        </div>
      </Main>
    )
  }
}
