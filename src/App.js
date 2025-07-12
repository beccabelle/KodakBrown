// Photographer/Videographer Portfolio Website (KodakBrown)

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'react-image-lightbox/style.css';

// Component Imports
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <header className="p-4 flex justify-between items-center border-b border-white">
          <h1 className="text-2xl font-bold uppercase">KodaKBrown</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/gallery" className="hover:underline">Gallery</Link>
            <Link to="/booking" className="hover:underline">Booking</Link>
          </nav>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>

        <footer className="text-center text-sm py-4 border-t border-white">
          &copy; 2025 KodaKBrown | All Rights Reserved
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://instagram.com/Koda_kbrown" target="_blank" className="hover:underline">Instagram</a>
            <a href="https://facebook.com/Koda_kbrown" target="_blank" className="hover:underline">Facebook</a>
            <a href="https://vimeo.com/Koda_kbrown" target="_blank" className="hover:underline">Vimeo</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}
