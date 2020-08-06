import React, { useState } from 'react';
import './App.css';
import Accounts from './components/Accounts/Accounts'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'

function App() {
  const [isClicked,setIsClicked] = useState(false)
  const [fading, setFading] = useState(false); 

  return (
    <div className="App">
      <div className="Body">
        <Accounts  isRegisteredIconClicked={isClicked} fading={fading}/>
        <Register fading={fading} onChangeIsClicked={setIsClicked}  onChangeFading={setFading} isClicked={fading}/>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
