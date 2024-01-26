import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blogs from './components/Blogs';
import * as React from 'react';
import BlogDetails from './components/BlogDetails';
import AddBlog from './AddBlog';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Editpost from './components/Editpost';
import { useEffect } from 'react';

function App() {

const LOCAL_STORAGE_KEY = 'react-blog-application-by-Saswata'

 const [blogs, setBlogs] = useState([
  {
    id: nanoid(),
    title: "Welcome to my channel",
    date: new Date().toLocaleDateString(),
    dics: "This is bloging Website",
  },
  
 ])

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blogs))
 }, [blogs])
 
 useState(() => {
  const fetchBlogs = JSON.parse(localStorage.getItem (LOCAL_STORAGE_KEY));
   if (fetchBlogs) setBlogs(fetchBlogs)
 })

 const addBlog = (blog) => {
 setBlogs([...blogs, { id: nanoid(), ...blog}])
 }
 const deleteHandle = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id !== id;
    })
    setBlogs(newBlogs);
 }
 const updateBlogHandle = (bg) => {
    const { id, title, date, dics } = bg;
 setBlogs(
  blogs.map((blog) => {
    return blog.id === id ? {...bg} : blog;
  })
 )
 }
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<Blogs Blogs={blogs} deleteHandle={deleteHandle} />} />
          <Route path='/read/:id' element={<BlogDetails />} />
          <Route path='/add-blog' element={<AddBlog addBlog={addBlog} />} />
          <Route path='/edit' element={<Editpost updateBlogHandle={updateBlogHandle}/>} />
        </Routes>
      </Router>
    </div>
  );
 }

export default App;
