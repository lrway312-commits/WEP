import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Oceanic from './pages/Oceanic'
import Atelier from './pages/Atelier'
import GoldStore from './pages/GoldStore'
import LuxuryHome from './pages/LuxuryHome'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LuxuryHome />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/abyss" element={<Oceanic />} />
        <Route path="/vault" element={<GoldStore />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
