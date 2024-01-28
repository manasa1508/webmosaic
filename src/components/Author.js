// Author.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.scss';
function Author() {
  const { id } = useParams();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    fetch(`https://webmosaic.petrichor.events/author?id=${id}`)
      .then(response => response.json())
      .then(data => setAuthor(data));
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{author.name}</h1>
      <p>{author.bio}</p>
    </div>
  );
}

export default Author;
