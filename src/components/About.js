// About.js
import React, { useState, useEffect } from 'react';
import './App.scss';
function About() {
  const [about, setAbout] = useState('');

  useEffect(() => {
    fetch('https://webmosaic.petrichor.events/about')
      .then(response => response.json())
      .then(data => setAbout(data.about));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p>{about}</p>
    </div>
  );
}

export default About;
