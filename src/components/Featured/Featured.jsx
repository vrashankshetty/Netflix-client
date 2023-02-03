import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../services/baseUrl'
import "./Feature.scss"
export default function Featured({type}) {

    const [content,setContent]=useState({})
    useEffect(()=>{
        const getRandomContent=async()=>{
            try{
                const res=await axios.get(`${baseUrl}/movies/random?type=${type}`,{
                    headers:{
                        "Content-type":"application/json",
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMzQ1ZDgxNjUzOTVmOTUzYTc3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDMwMDA2OCwiZXhwIjoxNjc0NzMyMDY4fQ.1WbPvll06mZHCPoyGDHawmCGuPn300Hb2JdXmBzZtNk"
                     }
                })
                setContent(res.data[0])
            }catch(e){
               console.log(e)
            }
        }
        getRandomContent()
    },[type])
    console.log(content)
  return (
    <div className="featured">
        {type &&(
            <div className="category">
                <span>{type === "movie"?"Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Historical">Historical</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Western">Western</option>
                    <option value="Animation">Animation</option>
                    <option value="Drama">Drama</option>
                    <option value="Documentary">Documentary</option>
                </select>
            </div>
        )
        
        }
        <img width="100%" src={content.img} alt="" />
        <div className="info">
        
                            <img src={content && content.img} alt="not available" />
                            <span className='desc'>{content && content.desc}</span>
            

            <div className="buttons">
                <button className='play'><PlayArrow/>
                <span>Play</span>
                </button>
                <button className='more'><InfoOutlined/>
                <span>More info</span>
                </button>
                
            </div>
        </div>
    </div>
  )
}
