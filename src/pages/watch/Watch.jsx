import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import {useLocation,Link} from "react-router-dom"
import "./watch.scss"
export default function Watch() {
  const location=useLocation()
  const movie=location.movie;
  console.log(location)
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        </Link>
        <video classname="video"src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
        autoPlay
         controls
         progress
         ></video>
    </div>
  )
}
