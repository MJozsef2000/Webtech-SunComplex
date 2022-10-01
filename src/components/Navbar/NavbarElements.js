import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
  background: white;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.5s all ease;

  @media screen and (max-width: 768px){
    position: none;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #709e00;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: flex-end;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #709e00;
  }
`;

export const NavImage = styled.img`
  width: 100%;
  height: 100%;
`