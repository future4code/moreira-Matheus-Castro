import React from 'react';
import axios from 'axios';

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
    componentDidMount () {
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
    };

    render() {
        const listaUsers = this.state.usuarios.map((user) => {
            return <li key={user.id}> {user.name}</li>
        })

        return <div>
            {listaUsers}
        </div>;
    }
}
