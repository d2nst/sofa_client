import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

import Logo from '../assets/sofa.png';
import MenuIcon from '../assets/menu.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="middleSide">
        <Link to="/">
          <img src={Logo} style={{ width: '124px', height: '40px' }} />
        </Link>
      </div>
      <div className="rightSide">
        <img src={MenuIcon} style={{ width: '24px', height: '24px' }} />
      </div>
      <ul>
        <li>
          <Link to="/">로그인</Link>
        </li>
        <li>마이페이지</li>
      </ul>
    </div>
  );
}

export default Navbar;
