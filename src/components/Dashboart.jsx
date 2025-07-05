import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './dashboart/Sidebar'
import Navbar from './dashboart/Navbar'

function Dashboart() {
  const promptHistory = [
    {
      id: 1,
      date: "Today",
      urls: [
        {
          id: 11,
          url: "url 1",
          title: "lorem ipsum"
        },
        {
          id: 12,
          url: "url 2",
          title: "lorem ipsum"
        },
        {
          id: 13,
          url: "url 3",
          title: "lorem ipsum"
        },
      ]
    },
    {
      id: 2,
      date: "Yesterday",
      urls: [
        {
          id: 21,
          url: "url 1",
          title: "lorem ipsum"
        },
        {
          id: 22,
          url: "url 2",
          title: "lorem ipsum"
        },
        {
          id: 23,
          url: "url 3",
          title: "lorem ipsum"
        },
      ]
    }
  ];
  return (
    <div className='dashboart-wrapper'>
      <Sidebar promptHistory={promptHistory}/>
      <div className='dashboart-main'>
        <Navbar/>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboart