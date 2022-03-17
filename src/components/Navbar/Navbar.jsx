import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage'
import { IconContext } from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
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
	MobileLanguage,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
	const { t } = useTranslation()
	const [scrollNav, setScrollNav] = useState(false)

  // 导航栏背景切换判断
	const changNav = () => {
		window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false)
	}

  // 监听页面滚动执行changNav
	useEffect(() => {
		window.addEventListener('scroll', changNav)
	}, [])

  // 返回顶部
  const toggleHome = () => {
    scroll.scrollToTop()
  }

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>
						<MobileLanguage>
							<ChangeLanguage />
						</MobileLanguage>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks to="about" smooth spy exact='true' offset={-80}>
									{t('nav.about')}
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="discover" smooth spy exact='true' offset={-80}>
									{t('nav.discover')}
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="services" smooth spy exact='true' offset={-80}>
									{t('nav.services')}
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="signup" smooth spy exact='true' offset={-80}>
									{t('nav.signup')}
								</NavLinks>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<ChangeLanguage />
							<NavBtnLink to="/signin">
								{t('nav.signin')}
							</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	)
}

export default Navbar
