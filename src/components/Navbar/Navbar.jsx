import React from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  MobileLanguage
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage'
const Navbar = ({toggle}) => {
  const {t} = useTranslation()

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>dolla</NavLogo>
          <MobileLanguage>
            <ChangeLanguage/>
          </MobileLanguage>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>{t('nav.about')}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>{t('nav.discover')}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>{t('nav.services')}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>{t('nav.signup')}</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <ChangeLanguage/>
            <NavBtnLink to='/signin'>{t('nav.signin')}</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar