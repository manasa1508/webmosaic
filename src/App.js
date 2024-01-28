// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Author from './components/Author';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.scss'; // Import SCSS file for global styles

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/author/:id" element={<Author/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
