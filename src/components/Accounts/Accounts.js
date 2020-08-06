import React from 'react';
import './Accounts.css';
import Item from '../Item/Item';
import {Animated} from 'react-animated-css';

export default function Accounts(props) {
  return (
    <Animated animationOut="zoomOut"  isVisible={!props.fading} className={props.isRegisteredIconClicked ? "AccountsNone":"Accounts"}>
      <div>
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
  </Animated>
  );
}

