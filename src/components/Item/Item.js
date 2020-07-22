import React from 'react';
import './Item.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Item() {
  return (
    <div >
        <div className="Item">
            <AiOutlineCloseCircle color="gray" className="Icon"/>
            <img alt="profileIcon" className="Image" height="120" width="120" src={require('../../images/profile.jpg')}/>
        </div>
    </div>
  );
}

