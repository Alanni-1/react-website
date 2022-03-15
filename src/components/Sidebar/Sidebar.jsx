import React from 'react'
import { 
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
 } from './SidebarElements'
 import {useTranslation} from 'react-i18next'

function Sidebar({isOpen, toggle}) {
  const {t} = useTranslation()

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='about'>{t('nav.about')}</SidebarLink>
          <SidebarLink onClick={toggle} to='discover'>{t('nav.discover')}</SidebarLink>
          <SidebarLink onClick={toggle} to='services'>{t('nav.services')}</SidebarLink>
          <SidebarLink onClick={toggle} to='signup'>{t('nav.signup')}</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='signin'>{t('nav.signin')}</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar