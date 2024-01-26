import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({blog , deleteHandle}) => {
  return (
    <div className='sm-6 mb-2'>
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>
                   {blog.title}
                </h5>
                <hr/>
                <p className='card-text'>
                  {blog.date}
                </p>
                <p className='card-text text'>
                 {blog.dics}
                </p>
                <Link to={`/read/${blog.id}`} state={{ blog: blog}} className="btn btn-primary">
                Read Me
                </Link>
                <button className='btn btn-danger ms-2' onClick={() => deleteHandle(blog.id)}>
                  Delete
                </button>
                <Link to ={`/edit`} state = {{ blog: blog }}className='btn btn-success ms-2'>
                 Edit Post
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Blog