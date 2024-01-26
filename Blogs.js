import React from 'react'
import Header from './Header'
import Blog from './Blog'

const Blogs = (props) => {
   //console.log(props.Blogs)
   const deleteHandle = (id) => {
    props.deleteHandle(id);
   }
  return (
    <div>
        <Header/>
        {
          props.Blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} deleteHandle={deleteHandle} />
          ))
        }
       
        
    </div>
  )
}

export default Blogs