// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import About from "./Components/About/About"
// import AnimatedCanvas from "./Components/AnimatedCanvas/AnimatedCanvas"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Nav/Navbar"
import Project from "./Components/Projects/projects"
import Services from "./Components/Services/Services"
import Skills from "./Components/Skills/Skills"


function App() {
  return (
    <>
    {/* <AnimatedCanvas/> */}
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
