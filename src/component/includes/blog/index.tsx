import React, { useState } from 'react';
import { Eye, MessageCircle, ArrowRight, Search } from 'lucide-react';

export default function Blog({ isHomePage = false }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogs = [
    {
      title: "Manfaat Luar Biasa Daun Kelor untuk Kesehatan",
      image: "assets/carousel-1.jpg",
      category: "Tanaman Herbal",
      description: "Daun kelor terkenal karena kandungan antioksidannya yang tinggi dan dipercaya dapat membantu meningkatkan daya tahan tubuh serta mengurangi risiko penyakit kronis.",
      views: "2.1K",
      comments: 15,
    },
    {
      title: "Rahasia Khasiat Temulawak sebagai Anti-inflamasi",
      image: "assets/carousel-1.jpg",
      category: "Tanaman Herbal",
      description: "Temulawak adalah salah satu tanaman herbal yang memiliki manfaat anti-inflamasi, membantu mengurangi nyeri sendi, serta menjaga kesehatan pencernaan.",
      views: "1.8K",
      comments: 10,
    },
    {
      title: "Jahe Merah: Tanaman Herbal Kaya Manfaat",
      image: "assets/carousel-1.jpg",
      category: "Tanaman Herbal",
      description: "Jahe merah dikenal dengan khasiatnya yang mampu meredakan gejala masuk angin, meningkatkan sistem kekebalan tubuh, dan memperlancar peredaran darah.",
      views: "2.5K",
      comments: 18,
    },
    {
      title: "Khasiat Kunyit untuk Kesehatan dan Kecantikan",
      image: "assets/carousel-1.jpg",
      category: "Tanaman ",
      description: "Kunyit tidak hanya bermanfaat untuk meningkatkan sistem kekebalan tubuh, tetapi juga memiliki khasiat untuk menjaga kesehatan kulit dan kecantikan alami.",
      views: "2.3K",
      comments: 20,
    },
  ];

  const categories = ['All', ...blogs.reduce<string[]>((acc, blog) => {
    if (!acc.includes(blog.category)) {
      acc.push(blog.category);
    }
    return acc;
  }, [])];

  const filteredBlogs = blogs.filter(blog => 
    (selectedCategory === 'All' || blog.category === selectedCategory) &&
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayBlogs = isHomePage ? filteredBlogs.slice(0, 3) : filteredBlogs;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Artikel Kesehatan Jamu</h2>
      
      {!isHomePage && (
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full p-2 pl-10 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <select
              className="p-2 border rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayBlogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img className="h-48 w-full object-cover" src={blog.image} alt={blog.title} />
            <div className="p-6">
              <div className="uppercase tracking-wide text-xs text-indigo-500 font-semibold">{blog.category}</div>
              <a href="#" className="block mt-2 text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300">{blog.title}</a>
              <p className="mt-3 text-gray-500 text-sm">{blog.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="flex items-center text-sm text-gray-500 mr-4">
                    <Eye size={16} className="mr-1" /> {blog.views}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <MessageCircle size={16} className="mr-1" /> {blog.comments}
                  </span>
                </div>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center">
                Selengkapnya <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}