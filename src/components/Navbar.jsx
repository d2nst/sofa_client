import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../assets/sofa.png';
import MenuIcon from '../assets/menu.png';

const Nav = styled.div`
  border-bottom: 3px solid #aec6cf;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
`;

const LeftSide = styled.div`
  flex: 1;
`;

const MiddleSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: -124px;
`;

const RightSide = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  list-style: none;
  margin: 0;
  width: 300px;
`;

const MenuItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <LeftSide />
      <MiddleSide>
        <Link to="/">
          <img src={Logo} style={{ width: '124px', height: '40px' }} />
        </Link>
      </MiddleSide>
      <RightSide>
        <img src={MenuIcon} style={{ width: '24px', height: '24px' }} onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && (
          <MenuDropdown>
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>Menu 2</MenuItem>
          </MenuDropdown>
        )}
      </RightSide>
    </Nav>
  );
}

export default Navbar;
