import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [show,setShow] = useState(false);
  return (
    <nav className='navbar'>
      <h1>Dashboard</h1>
      <div className='dropdown'>
        <button className='dropdown-btn' onClick={() => setShow(!show)}>Username</button>
        <nav className='dropdown-menu' style={{display: `${show ? "flex" : "none"}`}}>
          <Link to='/dashboard'>Profile</Link>
          <Link to='/dashboard'>Logout</Link>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar