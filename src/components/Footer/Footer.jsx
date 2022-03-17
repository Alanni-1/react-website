import React from 'react'
import {useTranslation} from 'react-i18next'
import {animateScroll as scroll} from 'react-scroll'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements'

const Footer = () => {
  const {t} = useTranslation()

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('footer.about.title')}</FooterLinkTitle>
              <FooterLink to="/">{t('footer.about.subtitle1')}</FooterLink>
              <FooterLink to="/">{t('footer.about.subtitle2')}</FooterLink>
              <FooterLink to="/">{t('footer.about.subtitle3')}</FooterLink>
              <FooterLink to="/">{t('footer.about.subtitle4')}</FooterLink>
              <FooterLink to="/">{t('footer.about.subtitle5')}</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{t('footer.contact.title')}</FooterLinkTitle>
              <FooterLink to="/">{t('footer.contact.subtitle1')}</FooterLink>
              <FooterLink to="/">{t('footer.contact.subtitle2')}</FooterLink>
              <FooterLink to="/">{t('footer.contact.subtitle3')}</FooterLink>
              <FooterLink to="/">{t('footer.contact.subtitle4')}</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>{t('footer.videos.title')}</FooterLinkTitle>
              <FooterLink to="/">{t('footer.videos.subtitle1')}</FooterLink>
              <FooterLink to="/">{t('footer.videos.subtitle2')}</FooterLink>
              <FooterLink to="/">{t('footer.videos.subtitle3')}</FooterLink>
              <FooterLink to="/">{t('footer.videos.subtitle4')}</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>{t('footer.social.title')}</FooterLinkTitle>
              <FooterLink to="/">{t('footer.social.subtitle1')}</FooterLink>
              <FooterLink to="/">{t('footer.social.subtitle2')}</FooterLink>
              <FooterLink to="/">{t('footer.social.subtitle3')}</FooterLink>
              <FooterLink to="/">{t('footer.social.subtitle4')}</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>dolla &copy; {new Date().getFullYear()} {t('footer.rights')}</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                <FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                <FaLinkedin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
