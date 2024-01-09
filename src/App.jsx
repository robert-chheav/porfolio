import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Blob from './components/Blob'
import Header from './components/Header'
import Skills from './components/Skills'
function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    {/* <Blob /> */}
    <Skills/>
    </>
  )
}

export default App
