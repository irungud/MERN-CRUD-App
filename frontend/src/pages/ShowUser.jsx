import React from 'react'
import Backbutton from '../components/Backbutton'
import '../styles/ShowUser.css'

const ShowUser = () => {
  return (
    <div className='show-user'>
      <div className='user-details'>
        <Backbutton />
        <h1>User Details</h1>
        <div className='show-user-details'>
          <div className='user-detail'>
            <label>First Name:</label>&nbsp;
            <span>Dennis</span>
          </div>
          <div className='user-detail'>
            <label>Last Name:</label>&nbsp;
            <span>Irungu</span>
          </div>
          <div className='user-detail'>
            <label>Email:</label>&nbsp;
            <span>dennisirungu@gmail.com</span>
          </div>
          <div className='user-detail'>
            <label>Birth Year:</label>&nbsp;
            <span>1999</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowUser
