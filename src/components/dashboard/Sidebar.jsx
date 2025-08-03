import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaPenToSquare } from "react-icons/fa6";
import { appContext } from '../../context/appContext';
import { LiaSpinnerSolid } from "react-icons/lia";
import { contentContext } from '../../context/contentContext';

function Sidebar() {
  const {setLoading,isOpen} = useContext(appContext);
  const {loading,promptHistory} = useContext(contentContext);
  const navigate = useNavigate();
  function handleClick(){
    navigate("/dashboard");
  }
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <Link to={'/dashboart'} className='logo'>Logo</Link>
        <button className={`sidebar-btn ${loading ? "loading" : ""}`} onClick={handleClick}>
          <FaPenToSquare />
          <span className='btn-loader'>
            <LiaSpinnerSolid />
          </span>
        </button>
      </div>
      <div className="sidebar-body">
        {
          promptHistory.map((item) => <div key={item.date} className='prompts'>
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