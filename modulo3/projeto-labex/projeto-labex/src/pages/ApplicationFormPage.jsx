import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { countries } from '../constants/contries'
import { url } from '../constants/urls'
import axios from 'axios'
import useForm from '../hook/useForm'

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

const ApplicationFormPage = () => {

    const params = useParams()
    const tripId = params.id

  const [idTrip, setTripId] = useState("");
  const [trips, setTrips] = useState([])

  const { form, onChangeForm, cleanFields } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  })

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  const sendApplication = (event) => {


    event.preventDefault()
    axios.post(`${url}/trips/${tripId}/apply`, form)
    .then((res) => {
        alert("Incrição enviada com sucesso! ")
        cleanFields()
    })
    .catch((err) => {
      alert("Erro ao enviar sua inscrição, tente novamente !")
    })
  }


  const onChangeTripId = (event) => {
    setTripId(event.target.value)
    console.log(event.target.value)
  }

  

  const getTrips = () => {
    axios
      .get(`${url}/trips`)
      .then((res) => {
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
      <form onSubmit={sendApplication}>
        <DivInput>
          <Select
            placeholder={"Escolha uma Viagem"}
            name={"travel"}
            defaultValue={""}
            onChange={onChangeTripId}
            required>
            <option value={""} disabled>Escolha uma viagem</option>
            {trips.map((trip) => {
              return <option value={trip.id} key={trip.id}>{trip.name}</option>
            })}
          </Select>

          <Input
            placeholder='Nome'
            name='name'
            required
            type='text'
            value={form.name}
            onChange={onChangeForm}
            pattern={"^.{3,}$"}
            title={"O nome deve ter no mínimo 3 caracteres"}/>

          <Input placeholder='Idade'
            name='age'
            required
            type='number'
            min={18}
            value={form.age}
            onChange={onChangeForm} />

          <Input placeholder='Texto de Candidatura'
            name='applicationText'
            required
            type='text'
            pattern={"^.{30,}$"}
            value={form.applicationText}
            title={"O texto deve ter no mínimo 30 caracteres"}
            onChange={onChangeForm} />

          <Input placeholder='Profissão'
            name='profession'
            required
            type='text'
            pattern={"^.{5,}$"}
            value={form.profession}
            title={"Deve ter no mínimo 5 caracteres"}
            onChange={onChangeForm} />

          <Select
            placeholder={"Escolha um País"}
            name={"country"}
            defaultValue={""}
            onChange={onChangeForm}
            required>
            <option value={""} disabled>Escolha um País</option>
            {countries.map((country) => {
              return <option key={country}>{country}</option>
            })}
          </Select>

        </DivInput>
        <Button type={"submit"}> Enviar </Button>
        <Button onClick={backPage}> Voltar</Button>
      </form>
      <DivButton>
        
        
      </DivButton>
    </Main>
  )
}

export default ApplicationFormPage 