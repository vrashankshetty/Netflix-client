import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React from 'react'
import { useRef,useState } from 'react'
import Listitem from '../listitem/Listitem'
import "./List.scss"
export default function List({list}) {
  const [isMoved,setIsMoved]=useState(false)
    const [slideNumber,setSlideNumber]=useState(0)
    const listRef = useRef()
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };

  return (
    <div className='list'>
    <div className="listTitle">{list.title}</div>
    <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")}
        style={{display:!isMoved && "none"}}
        />
        <div className="container" ref={listRef}>
          {list.content.map((l,i)=>(
          <Listitem  movie={l} index={i} key={i}/>
          ))}
            

        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
    </div>
    </div>
  )
}
