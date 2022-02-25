import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { url } from '../constants/urls'
import useForm from '../hook/useForm'



export default function LoginPage() {

  const {form, onChangeForm} = useForm({email:'', password: ''})

  const sendLogin = (event) => {

    event.preventDefault()

    axios
      .post(`${url}/login`, form)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        navigate('/admin')
      })
      .catch((err) => {
        console.log('deu erro', err.response)
      })
  }

  const navigate = useNavigate()

  const backPage = (event) => {
    event.preventDefault()
    navigate('/')
  }


  return (
    <div>LoginPage
      <form onSubmit={sendLogin}>
      <input
        name='email'
        placeholder='email'
        required
        type='email'
        value={form.email}
        onChange={onChangeForm}>
      </input>
      <input
        name='password'
        placeholder='senha'
        required
        pattern={"^.{6,}"}
        title={"A senha deve ter no mínimo 6 digitos"}
        type='password'
        value={form.password}
        onChange={onChangeForm}>
      </input>
      
      <button type={'submit'}> Entrar </button>
      <button onClick={backPage}> Voltar</button>
      
    </form>
    
    
    </div >
  )
}
