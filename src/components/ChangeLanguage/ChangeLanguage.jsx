// 语言切换组件

import React, {useState, useEffect} from 'react'
import i18n from '../../react-i18next-config'

import {
  Changeselect,
  Changeoption
} from './ChangeLanguageElements'

const ChangeLanguage = ({height}) => {
  const [language, setLanguage] = useState('zh')

  const changeLanguage = (e)=>{
    setLanguage(e.target.value)
    i18n.changeLanguage(e.target.value)
  }

  useEffect(() => {
    let type = localStorage.getItem("i18nextLng");
    if(type) {
      setLanguage(type)
    } else {
      //如果被清空了 那么当前语言会被设置为默认语言 zh
      setLanguage('zh')
    }
  }, [])


  return (
    <>
      <Changeselect value={language} onChange={(e)=>changeLanguage(e)} height={height}>
        <Changeoption value="zh">简</Changeoption>
        <Changeoption value="en">英</Changeoption>
      </Changeselect>
    </>     
  )
}

export default ChangeLanguage