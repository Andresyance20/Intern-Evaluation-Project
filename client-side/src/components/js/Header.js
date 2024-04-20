import React from 'react';
import '../css/Header.css';
import logoImage from '../../MLB_logo.jpg'; 

function Header() {
  return (
    <header className="App-header">
      <img src={logoImage} alt="MLB Logo" className="App-logo" />
      <h1>MLB Teams</h1>
    </header>
  );
}

export default Header;
