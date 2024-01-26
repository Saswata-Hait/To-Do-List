import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const AddBlog = (props) => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    date: new Date().toLocaleDateString(),
    dics: "",
  });  
  
  const add = (e) => {
    e.preventDefault();
    if( blog.title === "" || blog.dics === ""){
    alert("Please fil the Title and Discripton kindly")
    return
    }
    props.addBlog(blog);
    setBlog({ title: "" , dics: ""});
    navigate("/");
  }
  const handleChange = (event) => {
     const { name, value} = event.target;
     setBlog({...blog, [name]: value })
  }
  return (
    <div className='mt-4'>
        <form onSubmit={add}>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label fw-bold'>Blog Title</label>
                <input
                type="text"
                className="form-control"
                name="title"
                placeholder="xyz blog"
                value={blog.title}
                onChange={handleChange}
                />
            </div>
            <div className='mb-3'>
            <label htmlFor='Name' className='form-label fw-bold'>Blog Description</label>
            <textarea
            type="text"
            className="form-control"
            name="dics"
            rows="10"
            value={blog.dics}
            onChange={handleChange}
            />
            </div>
            <button className='btn btn-primary'>
              Post
            </button>
        </form>
    </div>
  )
}

export default AddBlog