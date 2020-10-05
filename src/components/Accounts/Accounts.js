import React, { useEffect, useState, useContext, useMemo } from "react";
import "./Accounts.css";
import Item from "../Item/Item";
import UserContext from "../../Context";

const ITEMS = [
  {
    id: 1,
    userAccount: "Facebook",
    isUploaded: true,
  },
  {
    id: 2,
    userAccount: "Facebook",
    isUploaded: true,
  },
  {
    id: 3,
    userAccount: "Facebook",
    isUploaded: true,
  },
  {
    id: 4,
    userAccount: "Facebook",
    isUploaded: true,
  },
  {
    id: 5,
    userAccount: "Facebook",
    isUploaded: true,
  },
];

export default function Accounts() {
  const [isUploading, setIsUploading] = useContext(UserContext);

  const [user, setUser] = useState({
    id: 0,
    userAccount: "Facebook",
    isUploaded: false,
  });

  useEffect(() => {
    console.log(isUploading);

    if (isUploading) {
      setUser({ ...user, id: ITEMS.length + 1, isUploaded: !isUploading });
      ITEMS.push(user);
      setIsUploading(false);
    }
  }, [isUploading]);

  console.log(ITEMS);
  return (
    <div className="Accounts">
      <div className="Header">
        <h3>Your accounts</h3>
        <h4>you can disconnect any account by clicking the cross </h4>
      </div>
      <div className="ItemsList">
        {ITEMS.map(({ id, userAccount, isUploaded }) => (
          <Item key={id} isUploaded={isUploaded} />
        ))}
      </div>
    </div>
  );
}
