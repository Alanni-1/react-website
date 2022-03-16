import React from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from '../ButtonElements'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Column2,
  Img
} from './InfoSectionElements'

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  topLine,
  headline,
  description,
  buttonLabel,
  darkText,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  const {t} = useTranslation()
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{t('info.'+ topLine +'.title')}</TopLine>
                <Heading lightText={lightText}>{t('info.'+ headline +'.subtitle')}</Heading>
                <Subtitle darkText={darkText}>{t('info.'+ description +'.p')}</Subtitle>
                <BtnWrap>
                  <Button to="home" primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                    {t('info.'+ buttonLabel +'.button')}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
