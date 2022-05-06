import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { url } from '../constants/urls'
import axios from 'axios'
import tripsListsBackground from '../assets/img/homeWallpaper.jpg'

const Container = styled.div`
  background-image: url(${tripsListsBackground}) ;
  min-height: 100vh;
  max-width: 100vw ;
  // background-size: cover ;
`

const Main = styled.div`
  padding-top: 10vh ;
  width: 75% ;
  display: grid ;
  grid-template-columns: repeat(3, 1fr);
  margin-left: auto ;
  margin-right: auto ;
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

const DivBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
  color: black ;
  padding: 10px 10px 10px 20px;
  margin: 20px;
  width: 420px;
  font-weight: bold ;
  border-radius: 20px;
  font-size: 17px;
  background: rgba(241, 241, 241, 0.281);
`

const ListTripsPage = (props) => {
  
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
    navigate(`/form/${props.id}`)
  }

  return (
    <Container>
       <DivHeader>
      <Button onClick={backPage}> VOLTAR</Button>
      <Button onClick={goToFormPage}> Inscrever-se </Button>
      </DivHeader>
      <Main>
      {trips && trips.length > 0 ? trips.map((trip) =>{
       return <DivBox key={trip.id}> 
         <p><b>Nome:</b> {trip.name}</p> 
         <p><b>Descrição:</b> {trip.description}</p>
         <p><b>Planeta:</b> {trip.planet}</p>
         <p><b>Duração:</b> {trip.durationInDays}</p>
         <p><b>Data:</b> {trip.date}</p> 
         <Button onClick={goToFormPage}> Inscrever-se </Button>
       </DivBox>  }) : <p>Carregando...</p>}
      
    </Main>
    </Container>
    
  )
}

export default ListTripsPage