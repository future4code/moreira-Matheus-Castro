import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'

const Login = () => {

  const {form, onChangeForm} = useForm({ email: '', password: '' })

  const navigate = useNavigate()

  const goToFeedPage = () => {
    navigate('/feed')
  }

  const goToSingupPage = () => {
    navigate('/signup')
  }

  return (
    <div>
      <form>
        <input
          name='email'
          placeholder='Email'
          required
          type='email'
          value={form.email}
          onChange={onChangeForm} />

        <input
          name='password'
          placeholder='Senha'
          required
          type='password'
          value={form.password}
          onChange={onChangeForm} />

      </form>
      <button onClick={goToFeedPage}> entrar </button>
      <button onClick={goToSingupPage}> cadastrar </button>
    </div>
  )
}

export default Login