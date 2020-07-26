import React from 'react';
import './Connection.css';

export default function Connection() {
  return (
        <div className="Connection">
          <div>
            <input placeholder="username"/>
            <input placeholder="password"/>
          </div>
          <div className="Button">
            <button>
              Connect
            </button>
          </div>
        </div>
    );
}




