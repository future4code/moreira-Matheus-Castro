import React from 'react';
import PagCadastro from './Components/PagCadastro';
import PagListaUsuarios from './Components/PagListaUsuarios';
import styled from 'styled-components';


export default class App extends React.Component {
  state = {
    trocarDePagina: "paginaCadastro"
  }

  trocarPagina = () => {
    if(this.state.trocarDePagina === "paginaCadastro"){
      this.setState({trocarDePagina: "pagListaUsuario"})
    } else {
      this.setState({trocarDePagina: "paginaCadastro"})
    }
  }

  render() {
    return (
      <div>
      <button onClick={this.trocarPagina}>Trocar Pagina</button>
      {this.state.trocarDePagina === "paginaCadastro" ? <PagCadastro /> :  <PagListaUsuarios />}
      </div>
    )
  }
}
