import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'

function Home() {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
      <Footer/>
    </>
  )
}

export default Home