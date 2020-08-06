import React, { useState } from 'react';
import ProgressBar from 'react-customizable-progressbar'

import './Connection.css';

export default function Connection() {
  const [total,setTotal] = useState(1)
  const [current,setCurrent] = useState(0.8)
  const [isConnecting,setIsConnecting] = useState(false)

  const connect =()=>{
    setIsConnecting(true)
  }
  return (
        <div className="Connection">
          <div>
            <input placeholder="username"/>
            <input placeholder="password"/>
          </div>
          {isConnecting? 
            <div className="ProgressBar">
              <ProgressBar
              
                progress={60}
                radius={100}
              />
            </div>
          :
          <div className={"Button"}>
            <button onClick={connect}>
              Connect
            </button>
          </div>
          }
         
          
          
        </div>
    );
}




