import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { countries } from '../constants/contries'
import { url } from '../constants/urls'
import axios from 'axios'

const DivButton = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
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

const DivInput = styled.div`
 display: flex;
 flex-direction: column;

`

const Input = styled.input`
  width: 350px;
  margin-top: 15px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 0px 0px 0px 10px;
  outline: 0px;
  `

const Select = styled.select`
  margin-top: 15px;
  border: 1px solid lightgray;
  height: 28px;
  border-radius: 10px;
  padding: 0px 0px 0px 10px;
  outline: 0;
`

const Main = styled.div`
  top: 50%;
  position: absolute;
  left: 50%;
  margin: -200px 0 0 -200px;
  width: 400px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Option = styled.option`
  color: lightgray;
`

 const ApplicationFormPage = () => {

  const [trips, setTrips] = useState([])

  const [travel, setTravel] = useState ('')
  console.log(travel)

  const [contrie, setContrie] = useState('')
  console.log(contrie)

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  const onChangeTravel = (event) => {
    setTravel(event.target.value)
  }

  const onChangeContrie = (event) => {
    setContrie(event.target.value)
  }

  const getTrips = () => {
    axios
    .get(`${url}/trips`)
    .then((res) => {
      /* console.log(res.data.trips) */
      setTrips(res.data.trips)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {

getTrips()

}, [])

  return (
    <Main>
      <h1>Inscreva-se para uma viagem</h1>
      <DivInput>
      <Select 
      defaultValue={""}
      required
      onChange={onChangeTravel}
      value={travel}
      placeholder='Escolha uma Viagem'>
       <Option> Escolha uma Viagem </Option>
       {trips.map((trip) => {
                        return <option key={trip.id}>{trip.name}</option>
                    })}
      </Select>
      <Input placeholder='Nome'></Input>
      <Input placeholder='Idade'></Input>
      <Input placeholder='Texto de Candidatura'></Input>
      <Input placeholder='Profissão'></Input>
      <Select
      defaultValue={""}
      required
      onChange={onChangeContrie}
      value={contrie}>
      <Option>  Escolha um País </Option>
      {countries.map((country) => {
                        return <option key={country}>{country}</option>
                    })}
      </Select>
      </DivInput>
      <DivButton>
      <Button onClick={backPage}> Voltar</Button>
      <Button> Enviar </Button>
      </DivButton>
    </Main>
  )
}

export default ApplicationFormPage 