import React from 'react';
import './App.css';
import Accounts from './components/Accounts/Accounts'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="Body">
        <Accounts/>
        <Register/>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
