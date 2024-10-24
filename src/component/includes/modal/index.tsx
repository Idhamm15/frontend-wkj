import React from 'react';

interface Service {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  status: 'available' | 'limited';
  rating: number;
  type: 'Service' | 'Product';
  description?: string;
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  const handleOrder = () => {
    const phoneNumber = '82130001643';
    const message = `Halo, saya tertarik dengan ${service.title}. Mohon informasi lebih lanjut.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl m-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {service.type}
              </span>
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-sm text-gray-600">{service.rating}</span>
              </div>
            </div>
          </div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">Harga</h3>
                <p className="text-2xl font-bold text-blue-600">
                  Rp {service.price.toLocaleString()}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full ${
                  service.status === 'available'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}
              >
                {service.status === 'available' ? 'Tersedia' : 'Stok Terbatas'}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Deskripsi</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <div className="pt-4 flex gap-3">
              <button 
                onClick={handleOrder}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Pesan Sekarang
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;