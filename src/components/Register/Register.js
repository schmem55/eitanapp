import React from 'react';
import './Register.css';
import {FaFacebookF} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

export default function Register() {
  return (
    <div className="Register">
      <h3 className='Title'>Connect to your account</h3>
      <div className="Apps">
        <button  className="IconApp">
          <FaFacebookF size={30}/>  
        </button>
        <button  className="IconApp">
          <FaWhatsapp size={30}/> 
        </button>
        <button  className="IconApp">
          <FaInstagram  size={30}/>  
        </button>
        <button  className="IconApp">
          <FaLinkedinIn  size={30}/>  
        </button>
        <button  className="IconApp">
          <FaTwitter size={30}/>  
        </button>
        <button  className="IconApp">
          <img width="30" height="30" src={require('../../images/tiktok.png')}/>
        </button>

        
        
        
    
      </div>
    </div>
  );
}


