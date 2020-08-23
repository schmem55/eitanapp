import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Connection.css';

const response={
  "-1":{
    message:"something went wrong"
  },
  "0":{
    message:"enter the code or the message",
    qrcode:"scan qrcode",
    html:"html"
  },
  "1":{
    waiting:{
      "2":"success",
      "error":"error"
    }
  }
}


export default function Connection() {
  const [isConnecting,setIsConnecting] = useState(false)
  const [completed, setCompleted] = useState(0);
  const [value, setValue] = useState(4);
  const [socketResponse,setSocketResponse]=useState(null)

  useEffect(() => {
    
  }, []);


  const connect =()=>{
    setIsConnecting(true)
  }

  const changeStatus=()=>{
    //socket
    if (socketResponse==="pending"){
      if(completed<=100){
        setTimeout(() => {
          checkIfCreationIsOver()
        }, 1000);
        return (
          <ProgressBar completed={completed} />
          )
      }else{
        return (<div>success</div>)
  
      }
    } else if (socketResponse==="-1"){
      return (<div>{response["-1"].message}</div>)
    } else if (socketResponse === "0"){
      //then return message or html or qrcode
      return (<div>{response["0"].message}</div>)

    }else{
      if(completed<=100){
        setTimeout(() => {
          checkIfCreationIsOver()
        }, 1000);
        return (
          <ProgressBar completed={completed} />
          )
      }else{
        return (<div>success</div>)
      }
    } 
  }

  const checkIfCreationIsOver=()=>{
    //make request and check response pending or 2
    
    if (socketResponse === "pending"){
      if (completed>=90 && completed<100  ){
        setCompleted(99)
      }else{
        setCompleted(completed+((100-completed)/30))
      }
    }
    else if(completed===100){
      setCompleted(101)
    }
    else{
      setCompleted(100)
    }
  }

  const changeSocketResponse=(e)=>{
    setCompleted(0)
    setSocketResponse(e.target.value)
  }
  return (
      <div className="Connection">
        {socketResponse?(
          <div className="Response">
            {changeStatus()}
          </div>
        ):
          <div>
            <input placeholder="username"/>
            <input placeholder="password"/>
          </div>
        }

      <div className="Box">
        <input onChange={(e)=>changeSocketResponse(e)}/>
        </div>  
    </div>
       
    );
}




