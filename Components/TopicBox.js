import React from 'react'
import './topicbox.css'
export default function TopicBox(props) {


  //const topic = "welcomeback to my yt chanel"
  //const item= "and learn someting"
  // const a=10;
  //const b=10;
  //const c=a+b;

   
  return (
    <div>
        <div className="topicbox">

        <span className='text'>car is {props.car} the price is {props.price}</span>  
        {props.children}
        
        </div>






    </div>
  )
}
