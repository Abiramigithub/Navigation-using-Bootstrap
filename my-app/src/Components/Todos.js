import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import './Active.css'

function Todos() {
  const [todos, setTodos] = useState()

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then((data) => data.json())
    //   .then((data) => {
    //     setTodos(data)
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setTodos(res.data)
    })
  }, [])

  return (
    <div>
      <div className='container'>
        {todos ? (
          <ul>
            {todos.map((todo) => {
              return (
                <li>
                  <div className='card  mt-5'>
                    <div className='card-body'>
                      <h5 className='card-title'>{todo.id}</h5>
                      <h3 className='card-text'>{todo.title}</h3>
                      <a href='#' class='btn btn-primary'>
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default Todos

// <div className='card mt-3'>
//   <div className='card-body'>
//     <h5 className='card-title'>{post.title}</h5>
//     <p className='card-text'>{post.body}</p>
//     <a href='#' className='btn btn-primary'>
//       Go somewhere
//     </a>
//   </div>
// </div>
