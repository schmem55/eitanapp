import React, { useState, createContext, useContext } from "react";
import "./App.css";
import Accounts from "./components/Accounts/Accounts";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import UserContext from "./Context";

function App() {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <UserContext.Provider value={[isUploading, setIsUploading]}>
      <div className="App">
        <Accounts />
        <Register />
      </div>
    </UserContext.Provider>
  );
}

export default App;
