import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: lightblue;
    justify-content: center
`

const Desc = styled.div`
    color: black;
    font-weight: bold;
    padding: 10px
`

const Borda = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    border: 2px solid gray;
    padding: 25px;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
`

const DivBotoes = styled.div`
    bottom: 470px;
    display: flex;
    justify-content: space-between;
    width: 180px
`

const Like = styled.button`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #ccf3bd;
    color: green;
    font-size: 35px;

    :hover {
        transform: scale(1.1);
        transition: all 0.5s ease 0s;
    }

`

const Deslike = styled.button`
border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: 	#f3bdbd;
    color: red;
    font-size: 35px;

    :hover {
        transform: scale(1.1);
        transition: all 0.5s ease 0s;
    }
`

const IMG = styled.img`
    border-radius: 10px;
    width: 350px;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`



const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lalalala"

const headers = {
    headers: {
        'Content-Type': "application/json"
    }
}




const Home = (props) => {

    const [user, setUser] = useState({})

    useEffect(() => {

    getProfileToChoose()

    }, [])

    const getProfileToChoose = () => {
        axios
            .get(`${url}/person`, headers)
            .then((res) => {
                setUser(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    

    const choosePerson = () => {

        const body = {
        id: user.id,
        choice: true
        }
        axios
            .post(`${url}/choose-person`, body, headers)
            .then((res) => {
                getProfileToChoose(res.data.profile)
            })
            .catch((err) => {
                console.log("erro")
            })
    }


    return (

        <Main>


            <Borda>
            <button onClick={props.vizualizarMatch}>Match</button>
            <button onClick={ props.clear}> resete </button>
                <IMG src={user.photo} />
                <Desc>
                    <h3>{user.name}, {user.age}</h3>
                    <p>{user.bio}</p>
                </Desc>
                <DivBotoes>
                    <Like onClick={() => choosePerson()}>♥️</Like>
                    <Deslike onClick={() => getProfileToChoose()}>x</Deslike>
                </DivBotoes>
            </Borda>

        </Main>
    )
}

export default Home