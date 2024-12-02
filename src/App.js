import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import MyCV from './components/MyCV';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my_cv" element={<MyCV />} />
      </Routes>
    </Router>
  );
}

export default App;
