import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Global.css';

// Composants
import Navbar from './components/Navbar/Navbar';

// Pages
import Accueil from './pages/Accueil';

function App() {

  return (
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </Router>
  );

}

export default App
