import React from 'react'
import { useLocation, Link } from 'react-router-dom'
const BlogDetails = () => {
    const location = useLocation();
  return (
    <div>
        <h2 className='mt-3'>{location.state.blog.title}</h2>
        <hr/>
        <p>{location.state.blog.dics}</p>
        <Link to="/" className='btn btn-primary'>
        Go Back
        </Link>
    </div>
  )
}

export default BlogDetails