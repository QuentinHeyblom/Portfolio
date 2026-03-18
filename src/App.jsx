import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Global.css';

import Navbar from './components/Navbar/Navbar';

import Accueil from './pages/Accueil';
import ProjetDetail from './pages/ProjetDetail';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isHidden = localStorage.getItem('hideConstructionPopup');
    if (!isHidden) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('hideConstructionPopup', 'true');
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projet/:id" element={<ProjetDetail />} />
      </Routes>

      {showPopup && (
        <div className="construction-popup">
          <span>Bienvenue ! Ce portfolio est toujours en cours de création. D'autres projets et sections arrivent...</span>
          <button className="close-popup-btn" onClick={closePopup} aria-label="Fermer">
            &times;
          </button>
        </div>
      )}
    </Router>
  );

}

export default App
