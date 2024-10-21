import React from 'react';

const ProfilComp: React.FC = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Wisata Kesehatan Jamu Tegal
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Menghadirkan pengalaman kesehatan alami dengan pengobatan tradisional dan herbal yang menyegarkan tubuh dan jiwa.   
          </p>
        </div>

        {/* Profile Card Section */}
        <div className="mt-12">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/assets/carousel-1.jpg"
              alt="Wisata Kesehatan Jamu Tegal"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-gray-800">Tentang Wisata Kesehatan Jamu Tegal</h3>
              <p className="mt-4 text-gray-600">
                Wisata Kesehatan Jamu Tegal (WKJ) adalah destinasi wisata kesehatan yang berfokus pada penyembuhan dan perawatan melalui pengobatan tradisional Indonesia, seperti jamu dan terapi herbal. Kami mengajak Anda untuk merasakan manfaat kesehatan alami dengan suasana relaksasi yang nyaman di tengah alam.
              </p>
              
              <h4 className="mt-6 text-2xl font-semibold text-gray-800">Layanan Utama</h4>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>Pengobatan Herbal dan Jamu Tradisional</li>
                <li>Perawatan Kesehatan Alami</li>
                <li>Terapi Relaksasi dengan Ramuan Herbal</li>
                <li>Workshop Pembuatan Jamu</li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilComp;
