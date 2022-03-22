import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import homeWallpaper from '../assets/img/homeWallpaper.jpg'

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw ;
  background-image: url(${homeWallpaper}) ;
`


const Main = styled.div`
  bottom: 50vh ;
  position:  fixed;
  left: 50px ;
  color: white ;
  width: 500px ; 
`

const DivHeader = styled.div`
  position: fixed ;
  height: 70px ;
  right: 50px;
  width: 450px;
  display: flex;
  justify-content: space-evenly;
  background: rgba(241, 241, 241, 0.281);
`

const Button = styled.button`
  font-size: 16px;
  border-radius: 15px;
  border: 0px;
  background-color: transparent;
  font-weight: bold;
  padding: 10px;
  color: white;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

  :hover{
    transform: scale(1.1);
    cursor: pointer;
  }
`

const H3 = styled.h3`
  color: white;
  font-family: Bellefair;
`

const Title = styled.div`
  bottom: 50px ;
  position:  fixed;
  left: 50px ;
  color: white ;
  width: 200px ;
  font-family: Bellefair;
`

const HomePage = () => {

  const navigate = useNavigate()

  const goToAdminPage = () => {
    navigate('/login')
  }

  const goToTripsPage = () => {
    navigate('/trips')
  }

  return (
    <MainContainer>
      <DivHeader>
        <Button onClick={goToTripsPage}> DESTINOS </Button>
        <Button onClick={goToAdminPage}> ADMIN </Button>
      </DivHeader>
      <Main>
        <H3>Não importa onde cada um de nós esteja neste planeta que
          chamamos de lar, todos olhamos para o mesmo lugar.
          É por isso que acreditamos que o espaço pertence a todos:
          aos aventureiros, aos audaciosos e aos curiosos.
        </H3>
        <Title>
          <h1>ESPAÇO PARA OS CURIOSOS</h1>
        </Title>



      </Main>
    </MainContainer>
  )
}

export default HomePage