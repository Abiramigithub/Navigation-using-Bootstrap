import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import './Active.css'

function Albums() {
  const [albums, setAlbums] = useState()

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/albums')
    //   .then((data) => data.json())
    //   .then((data) => {
    //     setComments(data)
    axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
      setAlbums(res.data)
    })
  }, [])

  return (
    <div>
      <div className='container'>
        {albums ? (
          <ul>
            {albums.map((album) => {
              return (
                <li>
                  <div className='card  mt-5'>
                    <div className='card-body'>
                      <h5 className='card-title'>{album.id}</h5>
                      <h3 className='card-text'>{album.title}</h3>
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

export default Albums

// <div className='card mt-3'>
//   <div className='card-body'>
//     <h5 className='card-title'>{post.title}</h5>
//     <p className='card-text'>{post.body}</p>
//     <a href='#' className='btn btn-primary'>
//       Go somewhere
//     </a>
//   </div>
// </div>
