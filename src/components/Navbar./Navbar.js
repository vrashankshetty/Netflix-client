import React, { useState } from 'react'
import "./Navbar.scss"
import {Search,NotificationsActive, ArrowDropDown, WindowRounded} from "@mui/icons-material"
import {Link} from "react-router-dom"
export default function Navbar() {
  const[isScroll,setIsScroll]=useState(false)

  window.onscroll=()=>{
    setIsScroll(window.pageYOffset ===0?false:true)
    return ()=>(window.onscroll = null)
  }
  return (
    <div className={!isScroll?'navbar':'navbar scrolled'}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="img" />
          <Link to="/" className='link'>
          <span>Home</span>
          </Link>
          <Link to="/Series" className='link'>
          <span>Series</span>
          </Link>
          <Link to="/movie" className='link'>
          <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
           <span><Search/></span>
           <span>KID</span>
            <span><NotificationsActive/></span>
            <span><img src="https://allhiphop.com/wp-content/uploads/2021/04/J.-Cole.jpg" alt="img" />
            </span>
            <div className="profile">
              <ArrowDropDown/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
