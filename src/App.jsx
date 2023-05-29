import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import Blog from './components/Blog'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div
        className='pb-10'
      >
        <NavBar/>
      </div>
      <Intro />
      <About />
      <Blog />
      {/* <Timeline/> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
