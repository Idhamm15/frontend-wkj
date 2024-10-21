import React from 'react'
import Navbar from '../component/includes/navbar'
import Footer from '../component/includes/footer'
import Blog from '../component/includes/blog'
import Faq from '../component/particle/faq'
import HeroBanner from '../component/includes/banner'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroBanner/>
          <Blog isHomePage={true} />
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home