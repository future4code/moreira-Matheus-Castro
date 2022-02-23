import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const DivButton = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -150px;
  width: 400px;
  text-align: center;
  align-items: center;
`

const Button = styled.button`
  font-size: 20px;
  border-radius: 15px;
  border: 0px;
  background-color: lightblue;
  font-weight: bold;
  padding: 10px;

  :hover{
    transform: scale(1.1);
    background-color: lightgray;
  }
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
    <Main>
      <h1>LabeX</h1>
      <DivButton>    
      <Button onClick={goToTripsPage}> Ver Viagens </Button>
      <Button onClick={goToAdminPage}> Área de Admin </Button>
      </DivButton>

    </Main>
  )
}

export default  HomePage