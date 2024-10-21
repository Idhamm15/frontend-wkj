// ContactSection.jsx
import React from 'react';

export const ContactSection = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.189947273622!2d109.12901517499826!3d-7.103972192899405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f947b2f61ffa1%3A0x106996704d975489!2sWISATA%20KESEHATAN%20JAMU%20KALIBAKUNG!5e0!3m2!1sid!2sid!4v1729479763317!5m2!1sid!2sid"
            style={{ filter: 'saturate(1.5)' }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-green-900 tracking-widest text-xs">ALAMAT</h2>
              <p className="mt-1">Desa Kalibakung, Kec. Balapulang, Kab. Tegal, Jawa Tengah</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-green-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:info@wisatajamu.com" className="text-green-600 leading-relaxed">info@wisatajamu.com</a>
              <h2 className="title-font font-semibold text-green-900 tracking-widest text-xs mt-4">TELEPON</h2>
              <p className="leading-relaxed">0812-3456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-green-900 text-lg mb-1 font-medium title-font">Kirim Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Berikan masukan Anda terkait pengalaman wisata jamu kami.</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nama</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Pesan</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">Kirim</button>
        </div>
      </div>
    </section>
  );
};
