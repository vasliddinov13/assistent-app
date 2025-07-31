import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6"
import { appContext } from '../../context/appContext';

function Navbar() {
  const [show,setShow] = useState(false);
  const {isOpen,setIsOpen} = useContext(appContext);
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <button className='sidebar-toggle' onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
        <h1>Dashboard</h1>
      </div>
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