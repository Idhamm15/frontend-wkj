import React from 'react'
import Navbar from '../component/includes/navbar'
import Footer from '../component/includes/footer'
import Blog from '../component/includes/artikel'
import Faq from '../component/particle/faq'
import HeroBanner from '../component/includes/banner'
import { ServicesGrid } from '../component/includes/product'
import { services } from '../component/includes/product/product'

function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroBanner />
          <Blog isHomePage={true} />
          <div className="py-8 mt-5">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-gray-900 text-center">Layanan & Produk</h1>
              <p className="mt-2 text-gray-600 text-center">
                Temukan layanan dan produk herbal terbaik untuk kesehatan Anda
              </p>
              <div className="p-10">
                <ServicesGrid
                  services={services}
                  showSearch={false}
                  showCategories={false}
                  showSort={false}
                  maxItems={4}
                />
              </div>
            </div>
          </div>
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home