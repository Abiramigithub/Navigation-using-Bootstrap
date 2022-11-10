import React from 'react'
import './Active.css'
// import Posts from './Posts'
// import Comments from './Comments'
// import Albums from './Albums'
// import Todos from './Todos'
// import Users from './Users'
// import { useNavigate } from 'react-router-dom'

function Header() {
  // let history = useNavigate
  // function Posts(props) {
  //   console.log(props)
  //   function Gotoposts() {
  //     props.history.push('/posts')
  //   }
  // }
  // const handleClick = (e) => {
  //   e.preventDefault()
  //   history.push('/comments')
  // }

  return (
    <div className='navbar-fixed'>
      <ul className='nav  nav-pills nav-justified bg-dark '>
        <li className='nav-item'>
          <a
            className='nav-link '
            id='pills-posts-tab'
            data-bs-toggle='pill'
            data-bs-target='#pills-posts'
            type='button'
            role='tab'
            aria-controls='pills-posts'
            aria-selected='true'
            href='/posts'
          >
            Posts
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link '
            id='pills-comments-tab'
            data-bs-toggle='pill'
            data-bs-target='#pills-comments'
            type='button'
            role='tab'
            aria-controls='pills-comments'
            aria-selected='false'
            href='/comments'
          >
            Comments
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link '
            id='pills-comments-albums'
            data-bs-toggle='pill'
            data-bs-target='#pills-albums'
            type='button'
            role='tab'
            aria-controls='pills-albums'
            aria-selected='false'
            href='/albums'
          >
            Albums
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link '
            id='pills-comments-todos'
            data-bs-toggle='pill'
            data-bs-target='#pills-todos'
            type='button'
            role='tab'
            aria-controls='pills-todos'
            aria-selected='false'
            href='/todos'
          >
            Todos
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link '
            id='pills-comments-users'
            data-bs-toggle='pill'
            data-bs-target='#pills-users'
            type='button'
            role='tab'
            aria-controls='pills-users'
            aria-selected='false'
            href='/users'
          >
            Users
          </a>
        </li>
      </ul>
      {/* <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link active '
              id='pills-home-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-home'
              type='button'
              role='tab'
              aria-controls='pills-home'
              aria-selected='true'
              onClick={'Gotoposts'}
              
            >
              Post
            </button>
            <Link to='/' className='btn btn-danger ml-2'>
              Post
            </Link>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-profile-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-profile'
              type='button'
              role='tab'
              aria-controls='pills-profile'
              aria-selected='false'
              onClick={() => history.push('/components/comments')}
              onClick={handleClick()}
            >
              Comments
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-contact-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-contact'
              type='button'
              role='tab'
              aria-controls='pills-contact'
              aria-selected='false'
              onClick={() => history.push('/components/albums')}

                onClick={handleClick()}
            >
              Albums
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-contact-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-contact'
              type='button'
              role='tab'
              aria-controls='pills-contact'
              aria-selected='false'
              onClick={() => history.push('/components/todos')}

                onClick={handleClick()}
            >
              Todos
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='pills-contact-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-contact'
              type='button'
              role='tab'
              aria-controls='pills-contact'
              aria-selected='false'
              onClick={() => history.push('/components/users')}

                onClick={handleClick()}
            >
              Users
            </button>
          </li>
        </ul>
         <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            id='pills-home'
            role='tabpanel'
          aria-labelledby='pills-home-tab'
          >
          hello
         </div>
          <div
             className='tab-pane fade'
          id='pills-profile'
            role='tabpanel'
             aria-labelledby='pills-profile-tab'
         >
             yes
           </div>
           <div
            className='tab-pane fade'
            id='pills-contact'
            role='tabpanel'
             aria-labelledby='pills-contact-tab'
           >
             i am here
           </div>
         </div>
       </nav> */}
    </div>
  )
}

export default Header
