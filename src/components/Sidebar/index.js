import React from 'react'
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
  } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="start" onClick={toggle}> Kezdőoldal </SidebarLink>
          <SidebarLink to="services" onClick={toggle}> Szolgáltatásaink </SidebarLink>
          <SidebarLink to="about" onClick={toggle}> Rólunk </SidebarLink>
          <SidebarLink to="info" onClick={toggle}> Céginformáció </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}> Kapcsolat </SidebarLink>
          <SidebarLink to="galery" onClick={toggle}> Galéria </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar