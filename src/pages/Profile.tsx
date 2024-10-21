import React from 'react'
import Navbar from '../component/includes/navbar'
import HeroSection from '../component/includes/hero'
import Footer from '../component/includes/footer'
import Blog from '../component/particle/blog'
import Faq from '../component/particle/faq'
import ProfilComp from '../component/particle/profiles'

function Profile() {
  return (
    <div>
        <Navbar/>
        <ProfilComp/>
        <Footer/>
    </div>
  )
}

export default Profile