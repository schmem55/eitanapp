import React, { useEffect, useState, useContext } from "react";
import "./Accounts.css";
import Item from "../Item/Item";
import UserContext from "../../Context";

const ITEMS = [
  {
    id: 1,
    userAccount: "Facebook",
    isUploading: false,
  },
  {
    id: 2,
    userAccount: "Facebook",
    isUploading: false,
  },
  {
    id: 3,
    userAccount: "Facebook",
    isUploading: false,
  },
  {
    id: 4,
    userAccount: "Facebook",
    isUploading: false,
  },
  {
    id: 5,
    userAccount: "Facebook",
    isUploading: false,
  },
];

export default function Accounts() {
  const [isUploading, setIsUploading] = useContext(UserContext);
  useEffect(() => {
    console.log(isUploading);
  }, [isUploading]);
  return (
    <div className="Accounts">
      <div className="Header">
        <h3>Your accounts</h3>
        <h4>you can disconnect any account by clicking the cross </h4>
      </div>
      <div className="ItemsList">
        {ITEMS.map(({ id, userAccount, isUploading }) => (
          <Item key={id} isUploading={isUploading} />
        ))}
      </div>
    </div>
  );
}
