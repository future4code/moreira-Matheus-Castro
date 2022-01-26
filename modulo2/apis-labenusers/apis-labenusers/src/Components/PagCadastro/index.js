import React from 'react';
import axios from 'axios';

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "matheus-castro-moreira"
  }
}

export default class PagCadastro extends React.Component {

  state = {
    usuarios: [],
    inputNome: "",
    inputEmail: ""
  }

  createUsers = () => {
    const body = {
      name:this.state.inputNome,
      email: this.state.inputEmail
    }

    axios
    .post(urlUsers, body, headers)
    .then((res) => {
      alert(`O usuário ${this.state.inputNome} foi adicionado`)
      this.setState({ inputNome: ""})
      this.setState({ inputEmail: ""})
    })
    .catch ((err) =>{
      alert(err.response.data.message)
      this.setState({inputNome: ""})
    })
  }

  onChangeUsers = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value})
  }
  render() {
    return (
      <div>
        
        <input
        value={this.state.inputNome}
        onChange={this.onChangeUsers}
        placeholder='Nome'>
        </input>
        <input
        value={this.state.inputEmail}
        onChange={this.onChangeEmail}
        placeholder='Email'>
        </input>
        <button onClick={this.createUsers}>Criar Usuário</button>
         
        
        </div>
    )
  }
}



