import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Main = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const CardUsuario = styled.div`
    border: 2px solid black;
    padding: 2px 2px 2px 10px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    width: 300px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Button = styled.div`
    color: red;
    border: 1px solid gray;
    width: 20px;
    font-weight: bold;
    background-color: white;

    :hover{
        background-color: red;
        color: white;
        cursor: pointer;
    }
`

const headers = {
    headers: {
        Authorization: "matheus-castro-moreira"
    }
};

export default class PagListaUsuarios extends React.Component {
    state = {
        usuarios: [],
        inputNome: "",
        inputEmail: ""
    }
    componentDidMount() {
        this.puxaLista()
    }

    puxaLista = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                headers
            )
            .then(res => {
                this.setState({ usuarios: res.data });
                console.log(this.state.usuarios)
            })
            .catch((err) => {
                alert("Algo deu errado, tente novamente")
            })
    }

    deleteUsuario = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            headers
        )
            .then(res => {
                alert("Usuário deletado com sucesso!")
                this.puxaLista()
            })
            .catch((err) => {
                alert("Erro ao deletar o usuário, tente novamente")
            })
    }

    render() {
        const listaUsers = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}> {user.name.toUpperCase()} <Button onClick={() => this.deleteUsuario(user.id)}>X</Button></CardUsuario>
            
        })

        return <div>
            <Main>
                {listaUsers}
            </Main>
        </div>;
    }
}
