import React from 'react';
import './Item.css';

export default function Item() {
  return (
    <div >
        <div className="Item">
            <img className="Image" height="120" width="120" src={require('../../images/profile.jpg')}/>
        </div>
    </div>
  );
}

