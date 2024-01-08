import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Result from './components/Result';
import About from './components/About';
import Values from './components/Values';
import Login from './components/Login';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router basename='/revyou'>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element= {<Login />} />
          <Route path="/home" element= {<MainContent />} />
          <Route path="/reviewer-maker" element={<FileUpload />} />
          <Route path="/result" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/values" element={<Values />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
        </Routes>
    </div>
    </Router>
   
  );
}

export default App;
