import React from 'react'
import Navbar from '../component/includes/navbar'
import HeroSection from '../component/includes/hero'
import Footer from '../component/includes/footer'
import Blog from '../component/particle/blog'
import Faq from '../component/particle/faq'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Blog/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home