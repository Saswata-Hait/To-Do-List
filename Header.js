import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-3'>
        <h2 className='text-success'>
            ToDo<span className='text-warning'>LIST</span>
            <Link to="/add-blog" type="button" className="btn rounded-circle">
            <img src='/images/plus-icon.png' alt='' width="50px"/>
            </Link>
      
        </h2>
    </div>
  )
}

export default Header