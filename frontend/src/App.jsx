import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import EditUser from './pages/EditUser'
import DeleteUser from './pages/DeleteUser'
import ShowUser from './pages/ShowUser'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='/show/:id' element={<ShowUser />} />
        <Route path='/delete/:id' element={<DeleteUser />} />
      </Routes>
    </div>
  )
};

export default App
