import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../constants/url'
import { useNavigate, useParams } from 'react-router-dom'

const Coments = () => {

  const navigate = useNavigate()

  const [coments, setComents] = useState([])

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
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {

    GetComments()

  }, [])

  const backPage = (event) => {
    event.preventDefault()
     navigate(-1)
 }

  return (
    <div>
      <div>
        <button onClick={backPage}> back </button>
        {coments?.map((coment) => {
          return <div key={coment.id}>{coment.body}</div>
        })}
      </div>
    </div>
  )
}

export default Coments