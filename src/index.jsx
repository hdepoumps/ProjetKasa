import React from 'react'
import { createRoot } from 'react-dom/client' // importez createRoot depuis react-dom/client
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FicheLogement from "./pages/FicheLogement"
import About from './pages/About'
import Header from './components/Header'
import Error from './components/Error'
import Footer from "./components/Footer";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
