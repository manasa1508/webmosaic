// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Post from './components/Post';
// import Author from './components/Author';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import './App.scss'; // Import SCSS file for global styles

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/about" element={<About/>} />
//           <Route path="/post/:id" element={<Post/>} />
//           <Route path="/author/:id" element={<Author/>} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import PostPage from './component/PostPage';
import About from './component/About';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route render={() => <div>404 Not Found</div>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;

