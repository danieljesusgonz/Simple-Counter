import React from 'react'
import { Digits } from './digits'

//import { SecondsCounter } from "./component/secondscounter";
export const SecondsCounter = (props) => {
    
  return (
    <div>
        <div className="bigCounter">
        <div className="calendar"> <i className="far fa-clock p-1"></i></div>
        <div className="seis"><Digits number={Math.floor(props.counter /10000) % 10}/></div>
        <div className="cinco"><Digits number={Math.floor(props.counter /10000) % 10}/></div>
        <div className="cuatro"><Digits number={Math.floor(props.counter /1000) % 10}/></div>
        <div className="tres"><Digits number={Math.floor(props.counter /100) % 10}/></div>
        <div className="dos"><Digits number={Math.floor(props.counter /10) % 10}/></div>
        <div className="uno"><Digits number={Math.floor(props.counter /1) % 10}/></div>
        
    </div>
    </div>
  )
}

//let counter = 0 
//setInterval(()=>{
   // counter = counter + 1
   // ReactDOM.render(<SecondsCounter counter={counter.indexOf()} />, document.querySelector("#app"));
//},1000) counter.indexOf()
