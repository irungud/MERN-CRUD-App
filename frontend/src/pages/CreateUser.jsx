import React, { useState } from 'react'
import Backbutton from '../components/Backbutton'
import '../styles/CreateUser.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateUser = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:5555/create', {Name, Email})
    .then((res) => {
      console.log(res);
      navigate('/')
    })
    .catch((err) => console.log(err))
  }
  return (
    <div className='create'>
      <div className='create-details'>
        <Backbutton />
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter you name' onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder='Enter you email' onChange={e => setEmail(e.target.value)} required />
          <button className='save-btn'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
