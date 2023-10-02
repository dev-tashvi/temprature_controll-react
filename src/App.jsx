import { useState } from "react";
import './App.css';
const Head = () =>{
  const [temp,settemp] = useState(10);
  const [tempcolor,setcolor] = useState("cold");

  const increase = () =>{
    const newtemp = temp+1;
    if(newtemp>30){
      setcolor("extreme")
    }
    else if(newtemp>15){
      setcolor("hot")
    }
    settemp(newtemp)
  }
  const decrease  = () =>{
    const newtemp = temp-1;
    if(newtemp<15){
      setcolor("cold")
    }
    else if(newtemp<30 && newtemp>15){
      setcolor("hot")
    }
    settemp(newtemp)
  }
  return (
    <>
      <div className="app-container">
        <div className="temperature-display-container">
            <div className={`temperature-display ${tempcolor}`}>{temp}°C</div>
        </div>
        <div className="button-container">
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    </>
  );
}
export default Head;