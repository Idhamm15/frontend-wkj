import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';
import NotFound from './component/includes/not_found';
import DetectionPage from './pages/Detection';
import ProductLayanan from './pages/layanan/Product';
import ShowArticle from './pages/ShowArtikel';
import GriyaJamu from './pages/layanan/GriyaJamu';
import RawatJalan from './pages/layanan/RawatJalan';
import LaboratoriumKlinik from './pages/layanan/LaboratoriumKlinik';
import AkupunturAkupresure from './pages/layanan/AkupunturAkupresure';
import KonsultasiGizi from './pages/layanan/KonsultasiGizi';
import PenelitianJamu from './pages/layanan/PenelitianJamu';
import PengolahanTanaman from './pages/layanan/PengolahanTanaman';
import WisataEdukasi from './pages/layanan/WisataEdukasi';
import PelatihanWorkshop from './pages/layanan/PelatihanWorkshop';
import Dashboard from './pages/Dashboard';
import ManagemenUsers from './pages/Dashboard/users';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artikel" element={<Article />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/detection-ai" element={<DetectionPage />} />
        <Route path="/artikel/:slug" element={<ShowArticle />} />


        <Route path="/layanan/griya-jamu" element={<GriyaJamu />} />
        <Route path="/layanan/rawat-jalan" element={<RawatJalan />} />
        <Route path="/layanan/laboratorium-klinik" element={<LaboratoriumKlinik />} />
        <Route path="/layanan/akupuntur-akupresure" element={<AkupunturAkupresure />} />
        <Route path="/layanan/konsultasi-gizi" element={<KonsultasiGizi/>} />
        <Route path="/layanan/pengolahan-tanaman" element={<PengolahanTanaman />} />
        <Route path="/layanan/penelitian-jamu" element={<PenelitianJamu />} />
        <Route path="/layanan/wisata-edukasi" element={<WisataEdukasi />} />
        <Route path="/layanan/pelatihan-workshop" element={<PelatihanWorkshop />} />
        <Route path="/layanan/produk-layanan" element={<ProductLayanan />} />


        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/users" element={<ManagemenUsers/>} />
        


        
        
        <Route path="*" element={<NotFound />} />  
      </Routes>
    </Router>
  );
}

export default App;