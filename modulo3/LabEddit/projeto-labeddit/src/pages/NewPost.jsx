import React from 'react'
import axios from 'axios'
import { url } from '../constants/url'
import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {

    const { form, onChangeForm } = useForm({ title: '', body: '' })

    const navigate = useNavigate()
    
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
            <form onSubmit={CreatePost}>
                <input
                    name='title'
                    placeholder='Title'
                    required
                    type='text'
                    value={form.title}
                    onChange={onChangeForm} />

                <input
                    name='body'
                    placeholder='Body'
                    required
                    type='text'
                    value={form.body}
                    onChange={onChangeForm} />
                <button> Create Post </button>
                <button onClick={backPage}>Back</button>
            </form>

        </div>
    )
}

export default NewPost