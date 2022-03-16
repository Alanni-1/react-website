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
  darkText,
  img,
  alt
}) => {
  const {t} = useTranslation()
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{t('info.title')}</TopLine>
                <Heading lightText={lightText}>{t('info.subtitle')}</Heading>
                <Subtitle darkText={darkText}>{t('info.p')}</Subtitle>
                <BtnWrap>
                  <Button to="home" primary='true' dark='true' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                    {t('info.button')}
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
