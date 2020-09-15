import React, { useState, useEffect, useContext, useCallback } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Connection.css";

import UserContext from "../../Context";

export default function Connection() {
  const [completed, setCompleted] = useState(0);
  const [socketResponse, setSocketResponse] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const [isUploading, setIsUploading] = useContext(UserContext);

  const changeStatus = () => {
    //socket
    if (socketResponse === "pending") {
      if (completed <= 100) {
        setTimeout(() => {
          checkIfCreationIsOver();
        }, 1000);
        return <ProgressBar completed={completed} />;
      } else {
        return <div>success</div>;
      }
    } else if (socketResponse === "-1") {
      return <div>something went wrong</div>;
    } else if (socketResponse === "0") {
      //then return message or html or qrcode
      return <div>enter the code or the message</div>;
    }
  };

  const checkIfCreationIsOver = () => {
    //make request and check response pending or 2
    if (completed > 30) {
      // if completed ==="finish"
      setCompleted((prevState) => 100);
    }

    if (socketResponse === "pending") {
      setCompleted((prevState) => prevState + (100 - prevState) / 30);
    }

    if (completed === 100) {
      setIsUploading((prevState) => !prevState);
      setInputValue("");
      setCompleted(101);
      setSocketResponse("");
    }
  };

  const changeSocketResponse = (e) => {
    setInputValue(e.target.value);
    setCompleted(0);
    setSocketResponse(e.target.value);
  };

  return (
    <div className="Connection">
      {socketResponse === "pending" ||
      socketResponse === "-1" ||
      socketResponse === "0" ? (
        <div className="Response">{changeStatus()}</div>
      ) : (
        <div>
          <input placeholder="username" />
          <input placeholder="password" />
        </div>
      )}

      <div className="Box">
        <input value={inputValue} onChange={(e) => changeSocketResponse(e)} />
      </div>
    </div>
  );
}
