import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../constants/url'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import useForm from '../hooks/useForm'
import like from '../img/like.png'
import liked from '../img/liked.png'
import deslike from '../img/deslike.png'
import desliked from '../img/desliked.png'

const Main = styled.div`
  background-color: #a7a5b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh ;
  overflow-y: hidden;
`

const Form = styled.form`
  display: flex ;
  flex-direction: column ;
  margin: 20px ;
  align-items: center
`

const Input = styled.textarea`
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

const DivCancel = styled.div`
  margin-top: 30px ;
  margin-bottom: 15px ;
  display: flex ;
  justify-content: center ;
`

const ButtonDiv = styled.div`
  display: flex ;
  justify-content: space-evenly;
  width: 300px ;
  margin-left: auto;
  margin-right: auto ;
  margin-top: 20px ;
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

const Img = styled.img`
  margin-left: 10px ;
  width: 20px;
  height: 20px ;
`

const DivUser = styled.div`
  display: flex ;
  justify-content: end ;
  padding-right: 35px;
`

const DivBody = styled.div`
  border: 2px solid white;
  width: 200px ;
  min-height: 50px;
  text-align: center ;
  border-radius: 15px;
  padding: 10px ;
  margin-left: auto ;
  margin-right: auto ;
`

const P = styled.p`
  color: white;
  font-weight: bold;
`

const PUser = styled.p`
color: lightblue;
`
const Span = styled.span`
  font-weight: bold ;
  color: white;
`

const DivButton = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
`

const Div = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  width: 300px;
  min-height: 150px;
  margin: 30px;
  border-radius: 20px;
  background-color: #252046;
  display: flex ;
  flex-direction: column ;
  justify-content: center ;
  word-break: break-word;
  `

const Coments = () => {

  const { form, onChangeForm } = useForm({ body: '' })

  const navigate = useNavigate()

  const [coments, setComents] = useState([])
  const [vote, setVote] = useState(0)
  const [newComment, setNewComment] = useState(0)

  const params = useParams()

  const GetComments = () => {

    const token = localStorage.getItem('token')

    axios
      .get(`${url}/posts/${params.id}/comments`, {
        headers: {
          Authorization: token
        }
      })
      .then((res) => {
        setComents(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const CreateComment = (event) => {
    event.preventDefault()

    const token = localStorage.getItem('token')

    axios
      .post(`${url}/posts/${params.id}/comments`, form, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        console.log(res.data)
        setNewComment(newComment + 1)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const CommentVoteLike = (id) => {

    const token = localStorage.getItem('token')

    const body = {
      direction: 1
    }

    axios
      .post(`${url}/comments/${id}/votes`, body, {
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


  const CommentVoteDeslike = (id) => {

    const token = localStorage.getItem('token')

    const body = {
      direction: -1
    }

    axios
      .put(`${url}/comments/${id}/votes`, body, {
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

  const DeleteCommentVote = (id) => {

    const token = localStorage.getItem('token')

    axios
      .delete(`${url}/comments/${id}/votes`, {
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

  useEffect(() => {

    GetComments()

  }, [vote, newComment])

  const backPage = (event) => {
    event.preventDefault()
    navigate(-1)
  }

  return (
    <Main>

      <Form onSubmit={CreateComment}>
        <DivButton>
          <Button onClick={backPage}> Back </Button>
          <Button> Comment </Button>
        </DivButton>

        <Input
          name='body'
          placeholder='Talk about'
          required
          type='text'
          value={form.body}
          onChange={onChangeForm} />


      </Form>
      <div>
        {coments && coments.length > 0 ? coments?.map(({ id, username, body, voteSum, userVote }) => {
          return (
            <Div key={id}>
            <DivUser>
              <PUser> {username}</PUser>
            </DivUser>
            <DivBody>
              <P>{body}</P>
            </DivBody>
              
              <ButtonDiv>
              <ButtonContainer
               onClick={() => CommentVoteLike(id)}> 
               <Img src={userVote === 1 ? liked : like} />
              </ButtonContainer>
              <Span>{voteSum}</Span>
              <ButtonContainer
              onClick={() => CommentVoteDeslike(id)}>
              <Img src={userVote === -1 ? desliked : deslike} />
              </ButtonContainer>
              </ButtonDiv>
              <DivCancel>
              <ButtonCancel style={userVote === null ? { color: 'white' } : { color: '#00a8f3' }} onClick={() => DeleteCommentVote(id)}> Reset my Likes </ButtonCancel>
              </DivCancel>
            </Div>
          )
        }): <P> There are no comments on this post yet, be the first! </P>}

      </div>
    </Main>
  )
}

export default Coments