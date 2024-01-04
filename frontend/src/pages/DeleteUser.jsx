import React from 'react'
import Backbutton from '../components/Backbutton'
import '../styles/DeleteUser.css'

const DeleteUser = () => {
  return (
    <div className='delete-user'>
      <div className='delete-confirmation'>
        <Backbutton />
        <h1>Delete User</h1>
        <div className='delete'>
          <h5>Are you sure you want to delete this user?</h5>
          <button>Yes, Delete!</button>
        </div>

      </div>

    </div>
  )
}

export default DeleteUser
