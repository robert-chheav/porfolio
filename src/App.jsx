import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Blob from './components/Blob'
import Header from './components/Header'
import Skills from './components/Skills'
function App() {

  return (
    <>
    <div className='relative flex flex-col max-w-7xl'>
      <Navbar/>
      <Blob />
      <Header/>
      <Skills/>
    </div>
    </>
  )
}

export default App
