import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Editpost = (props) => {

    const location = useLocation();
    const navigate = useNavigate();

    const [blog, setBlog] = useState({
        id:location.state.blog.id,
        title:location.state.blog.title,
        date:location.state.blog.date,
        dics:location.state.blog.dics,
    })
    const update = (e) => {
        e.preventDefault();
        if( blog.title === "" || blog.dics === ""){
        alert("Please fil the Title and Discripton kindly")
        return
        }
        props.updateBlogHandle(blog);
        setBlog({ title: "" , dics: ""});
        navigate("/");
    }
    const handleChange = (e) => {
        const { name, value} = e.target;
        setBlog({...blog, [name]: value })
    }
  return (
     <div className='mt-4'>
    <form onSubmit={update}>
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
          Update
        </button>
    </form>
</div>
)
}

export default Editpost