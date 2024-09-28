import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Login from '../pages/Login';
import KaKao from '../components/Kakao';

import Logo from '../assets/sofa.png';
import MenuIcon from '../assets/menu.png';
import CloseIcon from '../assets/close.png';
import EmailIcon from '../assets/email.png';

const HeaderContainer = styled.div`
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

const MenuButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  cursor: pointer;
`;

const MenuList = styled.ul`
  position: absolute;
  top: 50px;
  right: -20px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  list-style: none;
  margin: 0;
  width: 300px;
  height: 100vh;

  .close-btn {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
`;

const MenuItem = styled.li`
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  gap: 10px;

  .menu-txt {
    font-size: 0.9rem;
  }

  .hr {
    height: 1px;
    background-color: #ccc;
    padding: 0;
    width: 90%;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <LeftSide />
      <MiddleSide>
        <Link to="/">
          <img src={Logo} style={{ width: '124px', height: '40px' }} />
        </Link>
      </MiddleSide>
      <MenuButtonWrapper>
        <img src={MenuIcon} style={{ width: '24px', height: '24px' }} onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && (
          <MenuList>
            <div className="close-btn">
              <img src={CloseIcon} style={{ width: '24px', height: '24px' }} onClick={() => setMenuOpen(false)} />
            </div>
            <MenuItem>
              <h3 className="menu-txt">SOFA와 함께 여행을 떠나보세요!</h3>
            </MenuItem>
            <MenuItem>
              <div className="hr" />
            </MenuItem>
            <MenuItem>
              <KaKao />
              <button>
                <img src={EmailIcon} alt="Email" style={{ width: '30px', height: '30px', marginBottom: '7px' }} />
                이메일 로그인
              </button>
            </MenuItem>
          </MenuList>
        )}
      </MenuButtonWrapper>
    </HeaderContainer>
  );
};

export default Header;
