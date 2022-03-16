import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-5.svg'
import {useTranslation} from 'react-i18next'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Services = () => {
  const {t} = useTranslation()

  return (
    <ServicesContainer id="services">
      <ServicesH1>{t('services.title')}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>{t('services.one.title')}</ServicesH2>
          <ServicesP>{t('services.one.subtitle')}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>{t('services.two.title')}</ServicesH2>
          <ServicesP>{t('services.two.subtitle')}</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>{t('services.three.title')}</ServicesH2>
          <ServicesP>{t('services.three.subtitle')}</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services