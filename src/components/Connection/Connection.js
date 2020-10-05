import React, { useState, useEffect, useContext } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Connection.css";

import UserContext from "../../Context";

export default function Connection() {
  const [completed, setCompleted] = useState(0);
  const [socketResponse, setSocketResponse] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isSucess, setIsSucess] = useState(false);

  const [isUploading, setIsUploading] = useContext(UserContext);

  const changeSocketResponse = (e) => {
    setInputValue(e.target.value);
    setCompleted(0);
    setSocketResponse(e.target.value);
  };

  useEffect(() => {
    if (socketResponse == "pending") {
      const interval = setInterval(() => {
        setCompleted(
          (prevState) => prevState + Math.ceil((100 - prevState) / 30)
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [socketResponse]);

  useEffect(() => {
    if (completed > 10) {
      //if completed is finish
      setCompleted(100);
      setIsUploading(true);

      setTimeout(() => {
        setSocketResponse("");
        setIsSucess(true);
      }, 2000);
    }
  }, [completed]);

  return (
    <div className="Connection">
      {socketResponse === "pending" ? (
        <div className="Response">
          <ProgressBar completed={completed} />
        </div>
      ) : (
        <div>
          <input placeholder="username" />
          <input placeholder="password" />
        </div>
      )}

      {isSucess && <div>SUCESS</div>}

      <div className="Box">
        <input value={inputValue} onChange={(e) => changeSocketResponse(e)} />
      </div>
    </div>
  );
}
