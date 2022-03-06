import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../constants/url'
import styled from 'styled-components'
import ProtectToken from '../hooks/protect'
import like from '../img/like.png'
import liked from '../img/liked.png'
import deslike from '../img/deslike.png'
import desliked from '../img/desliked.png'
import comment from '../img/comentarios.png'
import useForm from '../hooks/useForm'
import carregando from '../img/carregando.gif'


const Div = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  width: 500px;
  min-height: 300px;
  margin: 30px;
  border-radius: 20px;
  background-color: #252046;
  `


const Main = styled.div`
  background-color: #a7a5b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh ;
`

const DivButton = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
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

const ButtonDiv = styled.div`
  display: flex ;
  justify-content: space-evenly;
  width: 300px ;
  margin-left: auto;
  margin-right: auto ;
  margin-top: 20px ;
`

const DivCancel = styled.div`
  margin-top: 30px ;
  display: flex ;
  justify-content: center ;
`

const ButtonContainer = styled.button`
  background-color: transparent;
  border: 0px ;
  border-radius: 10px;

  :hover{
    cursor: pointer;
    transform: scale(1.3);
    transition: all 0.5s ease 0s;
  }
`

const ButtonCancel = styled.button`
  border: 0px; 
  background-color: transparent ;
  font-size: 16px ;
  font-weight: bold ;
  :hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease 0s;
  }
`

const DivTittle = styled.div`
text-align: center ;
margin-top: -3vh ;
`

const DivUser = styled.div`
  display: flex ;
  justify-content: end ;
  padding-right: 35px;
`

const DivBody = styled.div`
  border: 2px solid white;
  width: 300px ;
  min-height: 50px ;
  text-align: center ;
  border-radius: 15px;
  padding: 10px ;
  margin-left: auto ;
  margin-right: auto ;
`

const Form = styled.form`
  display: flex ;
  flex-direction: column ;
  margin: 20px ;
  align-items: center
`

const Input = styled.input`
  width: 300px ;
  margin: 5px ;
  border-radius: 15px ;
  padding: 10px ;
  font-size: 17px;
  outline: 0px;
  border: 0px ;
  font-weight: bold ;
`

const InputBody = styled.textarea`
  width: 300px ;
  height: 100px ;
  border-radius: 15px ;
  margin: 5px ;
  padding: 10px ;
  font-size: 17px;
  outline: 0px;
  border: 0px ;
  font-weight: bold ;
`

const Img = styled.img`
  margin-left: 10px ;
  width: 20px;
  height: 20px ;
`

const P = styled.p`
  color: white;
  font-weight: bold;
`

const PUser = styled.p`
  color: lightblue;
`

const PDate = styled.p`
  color: lightblue;
  margin: 5px 0px 0px 15px;
  padding: 5px ;
`

const Span = styled.span`
  font-weight: bold ;
  color: white;
`


const converterData = (date) => {
  const day = date.substring(8, 10);
  const month = date.substring(5, 7);
  const year = date.substring(2, 4);
  const hour = date.substring(11, 13)
  const min = date.substring(14, 16)
  return `${day}/${month}/${year} ${hour}:${min}`;
};


export default function Feed() {

  ProtectToken()

  const { form, onChangeForm, cleanFields } = useForm({ title: '', body: '' })
  const [posts, setPosts] = useState([])
  const [vote, setVote] = useState(0)
  const [newPost, setNewPost] = useState(0)

  const navigate = useNavigate()

  const GetPosts = () => {

    const token = localStorage.getItem('token')

    axios
      .get(`${url}/posts`, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log('erro', err.response)
      })
  }

  const CreatePost = (event) => {
    event.preventDefault()

    const token = localStorage.getItem('token')

    axios
      .post(`${url}/posts`, form, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        setNewPost(newPost + 1)
        cleanFields()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const PostVoteLike = (id) => {

    const token = localStorage.getItem('token')

    const body = {
      direction: 1
    }

    axios
      .post(`${url}/posts/${id}/votes`, body, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        setVote(1)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const PostVoteDeslike = (id) => {

    const token = localStorage.getItem('token')

    const body = {
      direction: -1
    }

    axios
      .put(`${url}/posts/${id}/votes`, body, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        setVote(-1)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const DeletePostVote = (id) => {

    const token = localStorage.getItem('token')

    axios
      .delete(`${url}/posts/${id}/votes`, {
        headers: {
          authorization: token
        }
      })

      .then((res) => {
        setVote(0)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const goToComentsPage = (id) => {
    navigate(`/comments/${id}`)
  }

  useEffect(() => {

    GetPosts()

  }, [vote, newPost])

  return (
    <Main >

      <Form onSubmit={CreatePost}>
        <DivButton>
          <Button onClick={logout}> Logout </Button>
          <Button> Create Post </Button>
        </DivButton>

        <Input
          name='title'
          placeholder='Title'
          required
          type='text'
          value={form.title}
          onChange={onChangeForm} />

        <InputBody
          name='body'
          placeholder='Talk about'
          required
          type='text'
          value={form.body}
          onChange={onChangeForm} />
      </Form>

      {posts && posts.length > 0 ? posts.map(({ id, username, title, body, voteSum, commentCount, userVote, createdAt }) => {
        return (
          <Div key={id}>
            <DivUser>
              <PUser> {username}</PUser>
            </DivUser>
            <DivTittle>
              <P>{title}</P>
            </DivTittle>
            <DivBody>
              <P>{body}</P>
            </DivBody>
            <ButtonDiv>
              <ButtonContainer onClick={() => PostVoteLike(id)}>
                <Img src={userVote === 1 ? liked : like} />
              </ButtonContainer>
              <Span>{voteSum}</Span>
              <ButtonContainer onClick={() => PostVoteDeslike(id)}>
                <Img src={userVote === -1 ? desliked : deslike} />
              </ButtonContainer>
              <ButtonContainer onClick={() => goToComentsPage(id)}>
                <Img src={comment} />
              </ButtonContainer>
              <Span>{commentCount && commentCount.length > 0 ? commentCount : '0'}</Span>
            </ButtonDiv>
            <DivCancel>
              <ButtonCancel style={userVote === null ? { color: 'white' } : { color: '#00a8f3' }} onClick={() => DeletePostVote(id)}> Reset my Likes </ButtonCancel>
            </DivCancel>
            <PDate>{converterData(createdAt)}</PDate>
          </Div>
        )
      }) : <p>carregando </p>}


    </Main>
  )
}
