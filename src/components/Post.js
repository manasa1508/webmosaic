// Post.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.scss';
function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://webmosaic.petrichor.events/post?id=${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
