import React, { useState,useEffect } from 'react'
import Featured from '../../components/Featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/Navbar./Navbar'
import "./Home.scss"
import axios from "axios"
import { baseUrl } from '../../services/baseUrl'
export default function Home({type,genre}) {

   const [Lists,setLists]=useState([]);

   useEffect(() => {
      const getRandomlists=async()=>{
         try{
            const res=await axios.get(`${baseUrl}/lists${type?"?type="+type:""}&${genre?"genre="+genre:""}`,{
               headers:{
                  "Content-type":"application/json",
                  token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMzQ1ZDgxNjUzOTVmOTUzYTc3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDMwMDA2OCwiZXhwIjoxNjc0NzMyMDY4fQ.1WbPvll06mZHCPoyGDHawmCGuPn300Hb2JdXmBzZtNk"
               }
            })
            setLists(res.data)
         }catch(e){
            console.log(e)
         }
        
      }
      getRandomlists()
     }
   , [type,genre])
   
  return (
     <div className='home'>
        <Navbar/>
        <Featured type={type}/>
        {Lists.map((list,i)=>(
        <List list={list} key={i} />
        ))

        }

     </div>

  )
}
