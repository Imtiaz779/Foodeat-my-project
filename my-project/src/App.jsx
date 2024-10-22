import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TopList from './components/TopList/TopList'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <TopList/>
    </div>
  )
}

export default App