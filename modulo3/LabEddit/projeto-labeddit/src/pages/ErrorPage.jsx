import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.div`
  background-color: #a7a5b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh ;
  overflow-y: hidden;
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

const ErrorPage = () => {

    const Navigate = useNavigate()

    const goToHomePage = () => {

        Navigate('/')
      }


    return (
        <Main>
            <Button onClick={goToHomePage}>Go To Home Page</Button>
            <h1>Sorry, this page was not found</h1>
        </Main>
    )
}

export default ErrorPage