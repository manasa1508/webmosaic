// Card.js
import React from 'react';
import './App.scss'; // Import SCSS file for card styles

function Card({ title, content }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title" data-highlight={title}>{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

export default Card;
