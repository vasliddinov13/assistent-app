import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './dashboard/Sidebar'
import Navbar from './dashboard/Navbar'

function Dashboard() {
  return (
    <div className='dashboart-wrapper'>
      <Sidebar/>
      <div className='dashboart-main'>
        <Navbar/>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard