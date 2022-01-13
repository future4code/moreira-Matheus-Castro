import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {

    publi: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://st.depositphotos.com/1771835/2035/i/600/depositphotos_20355973-stock-photo-portrait-real-high-definition-grey.jpg',
        fotoPost: 'https://i.picsum.photos/id/516/200/150.jpg?hmac=J8NuASCG3b9RNBpYgZkAzTPlhuTy5utZiGDzlB2mI2g'
      },
      {
        nomeUsuario: 'Matheus',
        fotoUsuario: 'https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg',
        fotoPost: 'https://i.picsum.photos/id/282/200/151.jpg?hmac=785voQ6RAa1s57G1YDCJpubyZG98GhceTb4fkprByT0'
      },
      {
        nomeUsuario: 'Daniel',
        fotoUsuario: 'https://static6.depositphotos.com/1003580/615/i/600/depositphotos_6151014-stock-photo-african-american-man-portrait.jpg',
        fotoPost: 'https://i.picsum.photos/id/727/200/152.jpg?hmac=DjnIkqpqWLA-r5tZP7fJkUt7Tp2Yf7CYEvEILSG6WWE'
      }
    ]
  }

  render() {
    const listaDePublis = this.state.publi.map((usuario, index) => {

      return (
        <Post>
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost}

        </Post>
      )
    })

    return (
      <MainContainer>
        {listaDePublis}
      </MainContainer>


    );
  }
}

export default App;
