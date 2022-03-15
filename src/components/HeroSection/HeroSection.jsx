import React, {useEffect, useRef, useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroSectionElements.js'
import {useTranslation} from 'react-i18next'

const HeroSection = () => {
  const video = useRef(null)
  const [hover, sethover] = useState(false)
  const {t} = useTranslation()

  const onHover = () => {
    sethover(!hover)
  }
  
  useEffect(() => {
    video.current.play()
  })

  return (
    <HeroContainer id='home' className='unuser'>
      <HeroBg className='unuser'>
        <VideoBg className='unuser' ref={video} muted loop src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>{t('banner.title')}</HeroH1>
        <HeroP>
          {t("banner.subtitle")}
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            {t('banner.button')} { hover ? <ArrowForward/> : <ArrowRight/> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
