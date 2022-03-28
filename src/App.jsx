import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import AboutUS from './components/AboutUs'
import OurProject from './components/OurProject'
import Visa from './components/Visa'
import ContactUS from './components/ConactUs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <Header />
      <hr />
      <Welcome />
      <hr id="our-project"/>
      <OurProject />
      <hr id="about-us"/>
      <AboutUS />
     
      <hr id="visa"/>
      <Visa />
      <hr id="contact-us"/>
      <ContactUS />
      <Footer />
    </div>
  )
}

export default App
