import React from 'react'
import './App.css'
import Posts from './Components/Posts'
import Comments from './Components/Comments'
import Albums from './Components/Albums'
import Todos from './Components/Todos'
import Users from './Components/Users'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <div>{<Header />}</div>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='posts' element={<Posts />} />
          <Route path='comments' element={<Comments />} />
          <Route path='albums' element={<Albums />} />
          <Route path='todos' element={<Todos />} />
          <Route path='users' element={<Users />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
