import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ServiceDetailModal from '../modal';
import { Service, ServiceGridProps } from './typeProduct';
import { services } from './product';


const categories = [
  { id: 'all', name: 'Semua', count: services.length },
  { id: 'medical', name: 'Layanan Medis', count: services.filter(s => s.category === 'medical').length },
  { id: 'consultation', name: 'Konsultasi', count: services.filter(s => s.category === 'consultation').length },
  { id: 'product', name: 'Produk', count: services.filter(s => s.category === 'product').length }
];

export const ServicesGrid: React.FC<ServiceGridProps> = ({
  services,
  showSearch = true,
  maxItems,
  showCategories = true,
  showSort = true,
  className = ""
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices = services
    .filter(service => {
      const matchesSearch = !showSearch || service.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedFilter === 'all' || service.category === selectedFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0;
      }
    });

  const displayedServices = maxItems ? filteredServices.slice(0, maxItems) : filteredServices;

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className={className}>
      {/* Search and Filters */}
      {(showSearch || showSort) && (
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {showSearch && (
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari layanan atau produk..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
          
          {showSort && (
            <div className="flex gap-2">
              <select
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
                <option value="rating">Rating Tertinggi</option>
              </select>
            </div>
          )}
        </div>
      )}

      {/* Categories */}
      {showCategories && (
        <div className="flex overflow-x-auto gap-4 mb-6 pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedFilter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedFilter(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      )}

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedServices.map(service => (
          <div key={service.id} className="bg-white rounded-lg hover:shadow-md transition-shadow duration-200 shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{service.title}</h3>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {service.type}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm text-gray-600">{service.rating}</span>
                </div>
                <span className="text-sm text-gray-500">•</span>
                <span className={`text-sm ${
                  service.status === 'available' ? 'text-green-600' : 'text-orange-600'
                }`}>
                  {service.status === 'available' ? 'Tersedia' : 'Stok Terbatas'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  Rp {service.price.toLocaleString()}
                </span>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => handleOpenModal(service)}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
    </div>
  );
};



// Component for Products Page (full marketplace)
export const ProductsPageMarketplace = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Layanan & Produk</h1>
          <p className="mt-2 text-gray-600 text-center">
            Temukan layanan dan produk herbal terbaik untuk kesehatan Anda
          </p>
        </div>
        <ServicesGrid services={services} />
      </main>
    </div>
  );
};

export default ProductsPageMarketplace;