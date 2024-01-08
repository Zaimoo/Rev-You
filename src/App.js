import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';

import Result from './components/Result';
import About from './components/About';
import Values from './components/Values';
import Login from './components/Login';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Help from './components/Help';

function App() {
  const location = useLocation();

  const hideNavbarRoutes = ['/login']; // Add routes where Navbar should be hidden

  const shouldRenderNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {shouldRenderNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/revyou" element={<Login />} />
        <Route path="/home" element={<MainContent />} />
        <Route path="/reviewer-maker" element={<FileUpload />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/values" element={<Values />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
