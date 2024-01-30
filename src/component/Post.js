import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Post.scss';

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <Link to={`/post/${post.id}`} className="post-link">
        <h3 className="post-title">{post.name}</h3>
      </Link>
      {/* {author && <p className="author">Author: {author.name}</p>} */}
    </div>
  );
};

export default Post;
