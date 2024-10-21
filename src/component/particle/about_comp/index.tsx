import React from 'react';

const AboutComp: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Tentang Wisata Kesehatan Jamu Tegal
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Menghadirkan pengalaman kesehatan alami melalui pengobatan herbal dan jamu tradisional khas Indonesia.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {/* Sejarah Section */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Sejarah</h3>
            <p className="mt-3 text-gray-600">
              Wisata Kesehatan Jamu Tegal (WKJ) didirikan sebagai upaya untuk melestarikan budaya pengobatan tradisional jamu yang sudah dikenal sejak ratusan tahun di Indonesia. Lokasi ini berperan sebagai pusat wisata kesehatan yang berfokus pada pengobatan alami menggunakan bahan-bahan herbal dan ramuan asli Indonesia.
            </p>
            <p className="mt-3 text-gray-600">
              Dengan berkembangnya kesadaran akan kesehatan alami, WKJ terus berinovasi untuk memperkenalkan jamu dan tanaman herbal kepada masyarakat lokal maupun internasional.
            </p>
          </div>

          {/* Misi Section */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Misi</h3>
            <p className="mt-3 text-gray-600">
              Misi utama WKJ adalah memperkenalkan manfaat kesehatan dari jamu dan pengobatan herbal kepada masyarakat luas. Kami berkomitmen untuk menyediakan layanan kesehatan alami yang aman, berkualitas, dan berbasis penelitian ilmiah, serta mendukung pelestarian budaya Indonesia.
            </p>
          </div>

          {/* Layanan Unggulan Section */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Layanan Unggulan</h3>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Pengobatan dengan Jamu Tradisional</li>
              <li>Terapi Kesehatan Alami</li>
              <li>Wisata Edukasi Tanaman Herbal</li>
              <li>Konsultasi Pengobatan Herbal</li>
              <li>Workshop Pembuatan Jamu dan Obat Herbal</li>
            </ul>
          </div>

          {/* Visi Section */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Visi</h3>
            <p className="mt-3 text-gray-600">
              WKJ bertujuan untuk menjadi pusat wisata kesehatan berbasis herbal yang mendunia, menginspirasi dan membantu orang untuk menjaga kesehatan dengan cara yang alami dan tradisional.
            </p>
            <p className="mt-3 text-gray-600">
              Kami juga berupaya melestarikan warisan budaya pengobatan jamu agar terus dikenal oleh generasi mendatang.
            </p>
          </div>

          {/* Manfaat Kesehatan Section */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Manfaat Kesehatan</h3>
            <p className="mt-3 text-gray-600">
              Tanaman herbal yang digunakan di WKJ memiliki berbagai manfaat kesehatan, seperti meningkatkan daya tahan tubuh, membantu detoksifikasi, mengurangi stres, dan memperbaiki metabolisme. Setiap pengobatan yang diberikan di WKJ dirancang untuk menyeimbangkan tubuh dan pikiran secara alami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
