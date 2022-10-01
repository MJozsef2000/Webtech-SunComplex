import React from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavImage
} from './NavbarElements'
import logo from '../../images/logo.png'

const Navbar = ({ toggle }) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <NavImage src={logo} />
          </NavLogo>
          <NavLogo to='/' onClick={toggleHome}>
            SunComplex kft.
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
          <NavItem>
              <NavLinks to="start"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              activeClass="active"
              >Kezdőoldal</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              activeClass="active"
              >Szolgáltatásaink</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              activeClass="active"
              >Rólunk</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="info"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              activeClass="active"
              >Céginformáció</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              activeClass="active"
              >Kapcsolat</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="galery"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              activeClass="active"
              >Galéria</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar