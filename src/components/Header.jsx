// import logo from "../assets/nba-logo.png";

// const Header = () => {
//   return (
//     <div className="header">
//       <img src={logo} alt="logo-nba-original" />
//       <h1 className="main-head">NBA Legends</h1>
//       {/* <input type="search" name="" id="" placeholder="Search Player..." /> */}
//     </div>
//   );
// };

// export default Header;

import React from 'react'
import nba from "./assets/nba-logo.png"

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
          <img src={nba} alt="" />
        </div>
        <h1 className='title'>NBA Legends</h1>
    </div>
  )
}

export default Header