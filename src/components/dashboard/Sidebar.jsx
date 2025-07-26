import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaPenToSquare } from "react-icons/fa6";
import { appContext } from '../../context/appContext';
import { LiaSpinnerSolid } from "react-icons/lia";

function Sidebar({ promptHistory }) {
  const [loading, setLoading] = useContext(appContext);
  return (
    <div className='sidebar'>
      <div className="sidebar-header">
        <Link to={'/dashboart'} className='logo'>Logo</Link>
        <button className={`sidebar-btn ${loading ? "loading" : ""}`}>
          <FaPenToSquare />
          <span className='btn-loader'>
            <LiaSpinnerSolid />
          </span>
        </button>
      </div>
      <div className="sidebar-body">
        {
          promptHistory.map((item) => <div key={item.id} className='prompts'>
            <h4>{item.date}</h4>
            <nav>
              {item.urls.map((url) => <Link to={url.url} key={url.id}>{url.title}</Link>)}
            </nav>
          </div>)
        }
      </div>
    </div>
  )
}

export default Sidebar