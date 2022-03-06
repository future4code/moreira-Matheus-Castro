import React from 'react'
import styled from 'styled-components'

const Main = styled.header`
    background-color: #252046;
    justify-content: center;
    height: 6vh;
    display: flex;
`

const P = styled.p`
  color: #f03434 ;
  font-size: 25px;
  margin-top: 10px;
  font-weight: bold;
`

const Span2 = styled.span`
  color: white;
`

const Header = () => {
  return (
    <Main>
        <P>Lab<Span2>E</Span2>ddit</P>
    </Main>
  )
}

export default Header
