import React from 'react'
import { Nav, NavContainer, NavLogo, MobileIcon, FaBars, NavMenu, NavItem, NavLinks } from './NavbarElements'

function Navbar() {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>dolla</NavLogo>
          <MobileIcon>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About1</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar