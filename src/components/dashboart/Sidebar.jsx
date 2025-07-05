import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";

function Sidebar({ promptHistory }) {
  return (
    <div className='sidebar'>
      <div className="sidebar-header">
        <Link to={'/dashboart'} className='logo'>Logo</Link>
        <button className='sidebar-btn'>
          <FaChevronRight />
        </button>
      </div>
      <div className="sidebar-body">
        {
          promptHistory.map((item) => <div key={item.id} className='prompts'>
            <h4>{item.date}</h4>
            <nav>
              {item.urls.map((url) => <Link to={url.url}>{url.title}</Link>)}
            </nav>
          </div>)
        }
      </div>
    </div>
  )
}

export default Sidebar