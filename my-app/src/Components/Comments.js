import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import './Active.css'

function Comments() {
  const [comments, setComments] = useState()

  useEffect(() => {
    // fetch('https://https://jsonplaceholder.typicode.com/comments')
    //   .then((data) => data.json())
    //   .then((data) => {
    //     setComments(data)
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setComments(res.data)
    })
  }, [])

  return (
    <div>
      <div className='container'>
        {comments ? (
          <ul>
            {comments.map((comment) => {
              return (
                <li>
                  <div className='card  mt-5'>
                    <div className='card-body'>
                      <h5 className='card-title'>{comment.name}</h5>
                      <p className='card-text'>{comment.body}</p>
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

export default Comments

// <div className='card mt-3'>
//   <div className='card-body'>
//     <h5 className='card-title'>{post.title}</h5>
//     <p className='card-text'>{post.body}</p>
//     <a href='#' className='btn btn-primary'>
//       Go somewhere
//     </a>
//   </div>
// </div>
