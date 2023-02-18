import React from "react";
import logo from '../assets/nba-logo.png'

const Header = () => {
  return (
    <div className="header">
      <img
        src={logo}
        alt="logo-nba-original"
      />
      <h1 className="main-head">NBA Legends</h1>
      <input type="search" name="" id="" placeholder="Search Player..." />
    </div>
  );
};

export default Header;
