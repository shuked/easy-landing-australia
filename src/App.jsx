import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import AboutUS from './components/AboutUs'
import OurProject from './components/OurProject'
import Visa from './components/Visa'
import ContactUS from './components/ConactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Welcome />
      <AboutUS />
      <OurProject />
      <Visa />
      <ContactUS />
    </>
  )
}

export default App
