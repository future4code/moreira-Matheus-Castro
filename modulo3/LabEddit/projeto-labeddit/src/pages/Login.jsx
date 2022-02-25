import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import styled from 'styled-components'
import axios from 'axios'
import { url } from '../constants/url'

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #a7a5b5;
`

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #252046;
  border-radius: 15px;
  width: 500px;
  height: 500px;
  position:absolute;
  top:50%;
  left:50%;
  margin-left:-250px;/* half width*/
  margin-top:-250px;/* half height*/
  text-align: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const Input = styled.input`
  border: 0px;
  margin: 10px;
  border-radius: 10px;
  width: 250px;
  padding: 5px 0px 5px 10px;
  outline: 0;
`

const Button = styled.button`
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: #3D3D3D;
  background: #fff;
  border: none;
  font-weight: bold;
  margin: 20px;
  font-size: 14px;
  :hover{
    background-color: #f03434;
    color: white;
    cursor: pointer;
    transform: scale(1.15);
    transition: all 0.5s ease 0s;
  }  
`

const SignUp = styled.button`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 6px;
  color: #f03434;
  background: none;
  border: none;
  font-weight: 900;
  margin: 10px;
  font-size: 18px;
  :hover{
    color: red;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease 0s;
  }  
`

const Registrer = styled.div`
  margin-top: 20px;
`

const Span3 = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: aliceblue;
`

const Span4 = styled.span`
  color: #f03434;
  font-size: 15px;
`

const H4 = styled.h4`
  font-size: 13px;
  color:  aliceblue;
`

const H1 = styled.h1`
  color: aliceblue ;
`

const H2 = styled.h2`
  color: white;
`

const P = styled.p`
  color: #f03434 ;
  margin-top: 0px;
`

const Span2 = styled.span`
  color: white;
`

const Login = () => {

  const { form, onChangeForm } = useForm({ email: '', password: '' })

  const navigate = useNavigate()

  const goToFeedPage = () => {
    navigate('/feed')
  }

  const goToSingupPage = () => {
    navigate('/signup')
  }

  const Login = (event) => {
    event.preventDefault()

    axios
      .post(`${url}/users/login`, form)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeedPage()
      })
      .catch((err) => {
        console.log(err.response)
        alert("Incorrect email or password")
      })
  }
  return (
    <Main>
      <Container>
        <H1>Welcome back to <P>Lab<Span2>E</Span2>ddit</P></H1>
        <H2>Login To Your Account</H2>
        <H4><Span4>Lab<Span2>E</Span2>dit</Span4> is the new social <br />media made for <Span4>YOU</Span4>.</H4>
        <Form onSubmit={Login}>
          <Input
            name='email'
            placeholder='E-mail'
            required
            type='email'
            value={form.email}
            onChange={onChangeForm} />

          <Input
            name='password'
            placeholder='Password'
            required
            type='password'
            value={form.password}
            onChange={onChangeForm} />
          <Button> Login </Button>
        </Form>
        <Registrer>
          <Span3>Don't have an account?</Span3>
          <SignUp onClick={goToSingupPage}> Sign Up </SignUp>
        </Registrer>
      </Container>
    </Main>
  )
}

export default Login