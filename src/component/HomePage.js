// HomePage.js
import React, { useState, useEffect } from 'react';
import PostsList from './PostsList';
import PostPage from './PostPage';
import { useParams } from 'react-router-dom';
import '../style/HomePage.scss'; // Import CSS file for HomePage
import '../style/ParallaxPosts.scss'; // Import CSS file for ParallaxPosts

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  //const [length, setLength] =useState(0);
  const { postId } = useParams();

  
  useEffect(() => {
    fetch('https://webmosaic.petrichor.events/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts);
        setFilteredPosts(data.posts);
        //setLength(data.posts.length);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleSearch = event => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = posts.filter(post =>
      post.name.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
  };
  return (
    <div className="home-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="posts-container">
        {postId ? (
          <PostPage postId={postId}/>
        ) : (
          <PostsList posts={filteredPosts} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
