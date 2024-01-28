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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map(post => (
            <Link key={post.id} to={`/post/${post.id}`} className="block">
              <Card title={post.name} content={post.content} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
