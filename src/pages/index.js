import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'

function Home() {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    </>
  )
}

export default Home