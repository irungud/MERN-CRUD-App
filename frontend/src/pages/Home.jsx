import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function Home() {
    const [users, setUsers] = useState([]);
    const { ID } = useParams;
    useEffect(() => {
        axios.get('http://localhost:5555/')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    },[])
    return (
        <div className='home'>
            <div className='home-main'>
                <h1>List Users</h1>
                <Link to='/create'><button className='add-user-btn'>Add User</button></Link>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.ID}</td>
                                    <td>{data.Name}</td>
                                    <td>{data.Email}</td>
                                    <td>
                                        <Link to={`/edit/${data.ID}`}><button className='edit-btn'>Edit</button></Link>
                                        <Link to={`/delete/${data.ID}`}><button className='delete-btn'>Delete</button></Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
