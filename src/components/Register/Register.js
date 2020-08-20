import React, { useState, useEffect } from 'react';
import './Register.css';
import {FaFacebookF} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import Connection from '../Connection/Connection'
import {Animated} from 'react-animated-css';

export default function Register(props) {

  const [apps,setApps] = useState({
    "Facebook":false,
    "Whatsapp":false,
    "Instagram":false,
    "Linkedin":false,
    "Twitter":false
  })

  const setRegisterToAllView = ()=>{
    // props.onChangeFading(!props.fading);
    // props.onChangeIsClicked(!props.isClicked)
  }

  return (
    // <Animated 
    //   className={props.isClicked?"RegisterTrue":"Register"} 
    //   animationOut="slideInRight"  
    //   animationOutDelay="500"
    //   isVisible={!props.isClicked} >
    <div className="Register">
      <h3 className='Title'>Connect to your account</h3>
      <div className="Apps">

        {/* {Object.keys(apps).map((app,i)=>{
          return(
            <button onClick={()=>setApps({...app},!apps[app])}  className="IconApp">
              <FaWhatsapp size={30}/> 
          </button>
          )

        })} */}
        <button onClick={()=>setRegisterToAllView()} className="IconApp">
          <FaFacebookF size={30}/>  
        </button>
        <button onClick={()=>setRegisterToAllView()}  className="IconApp">
          <FaWhatsapp size={30}/> 
        </button>
        <button  onClick={()=>setRegisterToAllView()} className="IconApp">
          <FaInstagram  size={30}/>  
        </button>
        <button  onClick={()=>setRegisterToAllView()} className="IconApp">
          <FaLinkedinIn  size={30}/>  
        </button>
        <button  onClick={()=>setRegisterToAllView()} className="IconApp">
          <FaTwitter size={30}/>  
        </button>
        <button onClick={()=>setRegisterToAllView()} className="IconApp">
          <img alt="tiktok" width="30" height="30" src={require('../../images/logo-tiktok.svg')}/>
        </button>
      </div>
      
      <Connection/>
      

  </div>
  //</Animated>

  );
}


