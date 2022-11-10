import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import './Active.css'

function Users() {
  const [users, setUsers] = useState()

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((data) => data.json())
    //   .then((data) => {
    //     setUsers(data)
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data)
    })
  }, [])

  return (
    <div>
      <div className='container'>
        {users ? (
          <ul>
            {users.map((user) => {
              return (
                <li>
                  <div className='card mt-5'>
                    <div className='card-body'>
                      <h5 className='card-title'>{user.name}</h5>
                      <h3 className='card-text'>{user.username}</h3>
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

export default Users

// <div className='card mt-3'>
//   <div className='card-body'>
//     <h5 className='card-title'>{post.title}</h5>
//     <p className='card-text'>{post.body}</p>
//     <a href='#' className='btn btn-primary'>
//       Go somewhere
//     </a>
//   </div>
// </div>
