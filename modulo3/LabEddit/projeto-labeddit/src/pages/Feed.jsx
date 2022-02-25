import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../constants/url'
import styled from 'styled-components'

const Div = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 300px;
  margin: 30px;
`

export default function Feed() {

  const [posts, setPosts] = useState([])
  

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
        console.log(res.data)
      })
      .catch((err) => {
        console.log('erro', err.response)
      })
    }

    const PostVote = (id) => {

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
          console.log(res)
      })
      .catch((err) => {
          console.log(err)
      })
}

    const goToComentsPage = (id) => {
      navigate(`/comments/${id}`)
    }

    const goToNewPost = () => {
      navigate('/newPost')
    }

    const goToNewComents = (id) => {
      navigate(`/newComents/${id}`)
    }

    useEffect(() => {

      GetPosts()
    
    }, [])

  return (
    <div >
      <button onClick={goToNewPost}>New Post</button>
      {posts.map(({id, username, title, body, voteSum, commentCount}) => {
      return (
      <Div key={id}>
        <p>Usuário: {username}</p><p>Título: {title}</p>
        <p>Texto: {body}</p>
        <p>Votos: {voteSum}</p>
        <button onClick={() =>goToComentsPage (id)}>Comentários: {commentCount}</button>
        <button onClick={() =>goToNewComents (id)}>Comentar</button>
        <button onClick={()=> PostVote (id)}>+</button>
        <button>-</button>
     
      </Div>
      )
    })}</div>
  )
}
