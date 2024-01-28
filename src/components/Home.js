// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'; // Import Card component

function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://webmosaic.petrichor.events/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };  

  return (
    <div className="home">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Latest Posts</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded-lg w-full"
          />
        </div>
        <div className="card-grid">
          {filteredPosts.map(post => (
            <Link key={post.id} to={`/post?id=${post.id}`} className="card-link">
              <Card title={post.name} author={post.author} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
