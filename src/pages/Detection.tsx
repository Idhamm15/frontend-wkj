import React from 'react';
import Navbar from '../component/includes/navbar';
import Footer from '../component/includes/footer';
import Detection from '../component/includes/detaction';

function Article() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-14">
          <Detection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Article;