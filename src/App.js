/* src/App.js */

import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import Footer from './Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;