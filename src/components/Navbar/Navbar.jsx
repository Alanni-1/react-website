import React, { useState, useEffect } from 'react'
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
import { FaBars } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage'
import { IconContext } from 'react-icons/lib'

const Navbar = ({ toggle }) => {
	const { t } = useTranslation()
	const [scrollNav, setScrollNav] = useState(false)

	const changNav = () => {
		window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', changNav)
	}, [])

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to="/">dolla</NavLogo>
						<MobileLanguage>
							<ChangeLanguage />
						</MobileLanguage>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks to="about" smooth>
									{t('nav.about')}
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="discover" smooth>
									{t('nav.discover')}
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="services" smooth>
									{t('nav.services')}
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="signup" smooth>
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
