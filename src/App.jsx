import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import OurProject from './components/OurProject'
import Pricing from './components/OurPlans'
import Contact from './components/Contact'
import Download from './components/Download'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'


function App() {

  return (
    <div id="container">
      {/* <Preloader /> */}
      <Header />
      <Hero />
      <OurProject />
      <Pricing />
      <Contact />
      <Download />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
