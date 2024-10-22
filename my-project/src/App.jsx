import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TopList from './components/TopList/TopList'
import BgImage from "./assets/2.png"
import Banner from "./components/Banner/Banner"
import OurService from './components/OurServices/OurService'

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}
const App = () => {
  return (
    <div style={bgStyle} className="overflow-x-hidden ">
    <div className= 'min-h-screen bg-white/50 backdrop-blur-2xl'>
    <Navbar/>
      <Hero/>
      <TopList/>
      <Banner />
      <OurService />
    </div>
    </div>
  )
}

export default App