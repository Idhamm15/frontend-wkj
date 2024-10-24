import React from 'react'
import Navbar from '../component/includes/navbar'
import Footer from '../component/includes/footer'
import Blog from '../component/includes/artikel'

function Article() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">
          <Blog isHomePage={false} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Article