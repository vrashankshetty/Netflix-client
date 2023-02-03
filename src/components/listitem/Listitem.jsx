import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./listitem.scss"
import axios from "axios"
import { baseUrl } from '../../services/baseUrl'
import {Link} from "react-router-dom"
export default function Listitem({index,movie}) {
  const [isHovered,setIsHovered]=useState(false)
  const [Movie,setMovie]=useState("")
  useEffect(()=>{

    const getMovie=async ()=>{
     try{
      const res=await axios.get(`${baseUrl}/movies/find/`+movie,{
        headers:{
          "Content-type":"application/json",
          token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMzQ1ZDgxNjUzOTVmOTUzYTc3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDMwMDA2OCwiZXhwIjoxNjc0NzMyMDY4fQ.1WbPvll06mZHCPoyGDHawmCGuPn300Hb2JdXmBzZtNk"
       }
      })
      setMovie(res.data)
      }catch(e){
        console.log(e)
      }
    }
      getMovie()
  },[movie])
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <Link to={{pathname:'/watch',movie:{Movie}}}>
    <div className='listitem'
    style={{left:isHovered && index*225 - 50 + index*2.5}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>{setIsHovered(false)}}>
        {isHovered?<video src={trailer} autoPlay={true} loop />:<img src={Movie.img} alt="" />}
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownAltOutlined/>
          </div>
          <div className="itemInfoTop">
            <span>1:$4</span>
            <span className="limit">+{Movie.limit}</span>
            <span>{Movie.year}</span>
          </div>
          <div className="desc">{Movie.desc}.</div>
          <div className="genre">{Movie.genre}</div>
        </div>
    </div>
    
    </Link>
    
  )
}
