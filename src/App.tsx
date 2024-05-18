import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
