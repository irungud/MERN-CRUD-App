import React, { useState } from 'react'
import Backbutton from '../components/Backbutton'
import '../styles/EditUser.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditUser() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const { ID } = useParams();
  const navigate = useNavigate();
  function handleEdit(event){
    event.preventDefault();
    axios.put('http://localhost:5555/edit/'+ID, {Name, Email})
    .then((res) => {
      console.log(res)
      navigate('/')
    })
    .catch((err) => console.log(err))
  }
  return (
    <div className='edit-user'>
      <div className='edit-main'>
        <Backbutton />
        <h1>Edit User</h1>
        <form className='edit-form' onSubmit={handleEdit}>
          <input type="text" placeholder='Enter name' onChange={e => setName(e.target.value)} />
          <input type="email" placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
          <button>Save</button>
        </form>
      </div>
    </div>
  )
}

export default EditUser
