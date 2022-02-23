import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { url } from '../constants/urls'
import axios from 'axios'

const Main = styled.div`
  width: 540px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
`

const DivButton = styled.div`
  width: 540px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
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

const DivBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
  padding: 10px 10px 10px 20px;
  margin-bottom: 20px;
  width: 540px;
  border-radius: 20px;
  text-align: initial;
  font-size: 17px;
`

const ListTripsPage = () => {
  
  const [trips, setTrips] = useState([])

  const getTrips = () => {
    axios
    .get(`${url}/trips`)
    .then((res) => {
      console.log(res.data.trips)
      setTrips(res.data.trips)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  useEffect(() => {

    getTrips()
  
  }, [])

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  const goToFormPage = () => {
    navigate('/form')
  }

  return (
    <Main>
      <DivButton>
      <Button onClick={backPage}> Voltar</Button>
      <Button onClick={goToFormPage}> Inscrever-se </Button>
      </DivButton>
      <h1>Lista de Viagens</h1>
      {trips && trips.length > 0 ? trips.map((trip) =>{
       return <DivBox key={trip.id}> 
         <p><b>Nome:</b> {trip.name}</p> 
         <p><b>Descrição:</b> {trip.description}</p>
         <p><b>Planeta:</b> {trip.planet}</p>
         <p><b>Duração:</b> {trip.durationInDays}</p>
         <p><b>Data:</b> {trip.date}</p> 
       </DivBox>  }) : <p>Carregando...</p>}
      
    </Main>
  )
}

export default ListTripsPage