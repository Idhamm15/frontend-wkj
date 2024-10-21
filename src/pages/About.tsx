import React from 'react'
import Navbar from '../component/includes/navbar'
import HeroSection from '../component/includes/hero'
import Footer from '../component/includes/footer'
import Blog from '../component/particle/blog'
import Faq from '../component/particle/faq'

function About() {
  return (
    <div>
        <Navbar/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default About