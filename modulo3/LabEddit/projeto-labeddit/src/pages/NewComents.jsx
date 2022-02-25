import React from 'react'
import axios from 'axios'
import { url } from '../constants/url'
import useForm from '../hooks/useForm'
import { useNavigate, useParams } from 'react-router-dom'

const NewComents = () => {

    const { form, onChangeForm } = useForm({body: '' })

    const params = useParams()

    const navigate = useNavigate()
    
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
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    const backPage = (event) => {
        event.preventDefault()
         navigate(-1)
     }

    return (
        <div>
            <form onSubmit={CreateComment}>

                <input
                    name='body'
                    placeholder='Body'
                    required
                    type='text'
                    value={form.body}
                    onChange={onChangeForm} />

                <button> Create Comment </button>
                <button onClick={backPage}>Back</button>
            </form>

        </div>
    )
}

export default NewComents