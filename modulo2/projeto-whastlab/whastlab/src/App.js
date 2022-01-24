
import React from 'react';
import styled, { createGlobalStyle } from "styled-components"
import { Mensagens } from './components/mensagens';


const Main = styled.div`
  margin-top: 50px;
  width: 58vh;
  height: 70vh;
  border: 1px black solid;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  
  @media (max-width: 360px) {
    width: 45vh;
  }

`
const Ordem = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 65vh;
  border-bottom: 1px solid gray;
  background-image: url(https://i.pinimg.com/236x/c9/1f/cd/c91fcd147661c60204bd6b8ae9c0a8fd.jpg);
`



class App extends React.Component{
  render(){
    return ( 
      <Main>
        <Ordem>
        <Mensagens></Mensagens>
        
        <listaDeMensagens></listaDeMensagens>
        </Ordem>
      </Main>
      
    )
  }
}
/* export const Responsivo = createGlobalStyle`
  @media screen and (min-width: 375px) {
  */
export default App;
