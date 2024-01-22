import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Blob from './components/Blob'
import Header from './components/Header'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
function App() {

  return (
    <>
    <div className='relative flex flex-col max-w-5xl'>
      <Navbar/>
      <Blob />
      <Header/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
    </>
  )
}

export default App
