import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import './Active.css'

function Post() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPosts(res.data)
    })
  }, [])

  return (
    <div>
      <div className='container'>
        {posts ? (
          <ul>
            {posts.map((post) => {
              return (
                <li>
                  <div className='card  mt-5'>
                    <div className='card-body'>
                      <h5 className='card-title'>{post.title}</h5>
                      <p className='card-text'>{post.body}</p>
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

export default Post

// <div className='card mt-3'>
//   <div className='card-body'>
//     <h5 className='card-title'>{post.title}</h5>
//     <p className='card-text'>{post.body}</p>
//     <a href='#' className='btn btn-primary'>
//       Go somewhere
//     </a>
//   </div>
// </div>
