import React from 'react'
import { Link } from 'react-router-dom';
import './BackButton.css'

const Backbutton = ({destination='/'}) => {
  return (
    <div>
      <Link to={destination}>
      <button className='back-btn'>Back to Home</button>
      </Link>
    </div>
  )
}

export default Backbutton
