import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Post.scss';

const Post = ({ post }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`https://webmosaic.petrichor.events/author?id=${post.author_id}`)
      .then(response => response.json())
      .then(data => setAuthor(data))
      .catch(error => console.error('Error fetching author:', error));
  }, [post.author_id]);

  return (
    <div className="post-card">
      <Link to={`/post/${post.id}`} className="post-link">
        <h3 className="post-title">{post.name}</h3>
      </Link>
      {author && <p className="author">Author: {author.name}</p>}
    </div>
  );
};

export default Post;
