import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Article from './pages/Article';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './component/includes/navbar';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/artikel" element={<Article />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
