//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/secondscounter";

let counter = 0 
setInterval(()=>{
    counter = counter + 1


    
    
    
    
    ReactDOM.render(<SecondsCounter counter={counter} />, document.querySelector("#app"));
},1000) 

//render your react application


