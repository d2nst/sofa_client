import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

import Logo from '../assets/sofa.png';
import MenuIcon from '../assets/menu.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="leftSide" />
      <div className="middleSide">
        <Link to="/">
          <img src={Logo} style={{ width: '124px', height: '40px' }} />
        </Link>
      </div>
      <div className="rightSide">
        <img src={MenuIcon} style={{ width: '24px', height: '24px' }} onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && (
          <ul className="menu dropdown">
            <li>menu1</li>
            <li>menu2</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
