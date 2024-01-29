// Footer.js
import React from 'react';
import '../App.scss'; // Import SCSS file for component-specific styles

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Web Mosaic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
