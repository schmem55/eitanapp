import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar'
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

  useEffect(() => {
  }, []);


  const connect =()=>{
    setIsConnecting(true)
  }

  const makeRequest=()=>{
    //do the request and get response
    var responseAfterRequest = "1"
    if (responseAfterRequest==="-1"){
      return (
        <div>{response["-1"].message}</div>
        )
    } else if (responseAfterRequest === "0"){
      //then return message or html or qrcode
      
    }else{
      //check if pending 
        if(completed<=100){
          setTimeout(() => {
            checkIfCreationIsOver()
          }, 100);
          return (
            <ProgressBar  completed={completed} />
            )
        }else{
          return (<div>success</div>)

        }
      } 
  }

  const checkIfCreationIsOver=()=>{
    //make request and check response pending or 2
    var response = "pending"
    if (response === "pending"){
      if (completed>=90 && completed<100  ){
        setCompleted(99)
      }else{
        setCompleted(completed+10)
      }
    }
    else {
      if(completed===100){
        setCompleted(101)
      }else{
        setCompleted(100)
      }
    }
  }
  return (
      <div className="Connection">
      {
        !isConnecting &&(
          <div>
            <input placeholder="username"/>
            <input placeholder="password"/>
          </div>
      )}
      {isConnecting? 
        <div className="Response">
         {makeRequest()}
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




