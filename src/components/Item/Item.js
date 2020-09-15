import React, { useEffect, useState } from 'react';
import './Item.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Item(props) {
  const [isUploading,setIsUploading]= useState(props.isUploading)

  useEffect(()=>{
    setIsUploading(props)
  },[isUploading])

  return (
    <div>
      <div className={isUploading?"ItemIsUploading":"Item"}>
        <AiOutlineCloseCircle color="gray" className="Icon"/>
        <img alt="profileIcon" className="Image" height="120" width="120" src={require('../../images/profile.jpg')}/>
      </div>
    </div>
  );
}

