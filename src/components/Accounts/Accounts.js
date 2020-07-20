import React from 'react';
import './Accounts.css';
import Item from '../Item/Item'

export default function Accounts() {
  return (
    <div className="Accounts">
      <div className="Header">
        <h3>Your accounts</h3>
        <h4>you can disconnect any account by clicking the cross </h4>
      </div>
      <div className="ItemsList">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>

        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>     
  </div>
  );
}

