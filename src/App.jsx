// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import styles from './App.module.css';
import HomePage from './pages/HomePage/HomePage';
import ProfileDownload from './pages/ProfileDownload/ProfileDownload';
import CareersPage from './pages/CareersPage/CareersPage';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfileDownload />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
