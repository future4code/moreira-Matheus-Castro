import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProtectToken from '../hook/protect'
import styled from 'styled-components'
import useForm from '../hook/useForm'
import axios from 'axios'
import { url } from '../constants/urls'
import { planets } from '../constants/planets'
import { useParams } from 'react-router-dom'

const DivButton = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

const Main = styled.div`
  position: absolute;
  top: 30%;
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



export default function CreateTripPage() {

  const { form, onChangeForm, cleanFields } = useForm({ name: '', planet: '', date: '', description: '', durationInDays: 0 })

  const CreateTrip = (event) => {

    event.preventDefault()

    const token = localStorage.getItem('token')
    axios
      .post(`${url}/trips`, form, {
        headers: {
          auth: token
        }
      })
      .then((res) => {
        alert('deu certo')
      })
      .catch((err) => {
        console.log(err.response)
      })
  }



  ProtectToken()

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }


  return (
    <Main>
      <h1>Criar Viagem</h1>

      <form onSubmit={CreateTrip}>
        <input
          name='name'
          placeholder='Nome'
          required
          pattern={"^.{4,}"}
          title={"A nome da viagem deve ter no mínimo 4 digitos"}
          type='text'
          value={form.name}
          onChange={onChangeForm}>
        </input>

        <select
          placeholder={"Planeta"}
          name={"planet"}
          defaultValue={""}
          onChange={onChangeForm}
          required
        >
          <option value={""} disabled>Escolha um Planeta</option>
          {planets.map((planet) => {
            return <option value={planet} key={planet}>{planet}</option>
          })}
        </select>

        <input
          name='date'
          placeholder='Data'
          required
          type='date'
          value={form.date}
          onChange={onChangeForm}>
        </input>

        <input
          name='description'
          placeholder='Descrição'
          required
          pattern={"^.{20,}"}
          title={"A descrição deve ter no mínimo 20 digitos"}
          type='text'
          value={form.description}
          onChange={onChangeForm}>
        </input>

        <input
          name='durationInDays'
          placeholder='Duração em dias'
          required
          type='number'
          value={form.durationInDays}
          onChange={onChangeForm}
          min={30}>
        </input>

        <Button> Criar </Button>
      </form>
      <DivButton>
        <Button onClick={backPage}> Voltar</Button>

      </DivButton>
    </Main>
  )
}
// {name:'', planet: '', date: '', description: '', durationInDays: 0}