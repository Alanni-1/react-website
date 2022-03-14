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

const HeroSection = () => {
  const video = useRef(null)
  const [hover, sethover] = useState(false)

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
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign uo for a new accoun today and receive $250 in credit towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary dark>
            Get started { hover ? <ArrowForward/> : <ArrowRight/> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
