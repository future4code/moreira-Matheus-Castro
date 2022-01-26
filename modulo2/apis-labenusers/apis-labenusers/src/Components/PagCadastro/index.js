import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  background-color: white;
  width: 100px;
  margin-top: 10px;

  :hover{
    cursor: pointer;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const Input = styled.input`
  width: 300px;
  padding: 1px;
  margin-bottom: 10px;
  border-radius: 5px;
`

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
      <Main>
        
        <Input
        value={this.state.inputNome}
        onChange={this.onChangeUsers}
        placeholder='Nome'>
        </Input>
        <Input
        value={this.state.inputEmail}
        onChange={this.onChangeEmail}
        placeholder='Email'>
        </Input>
        <Button onClick={this.createUsers}>Criar Usuário</Button>
         
        
        </Main>
    )
  }
}



