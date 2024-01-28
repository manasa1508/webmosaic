// PostCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:-translate-y-2">
      <Link to={`/post/${post.id}`} className="block">
        <img src={post.image} alt={post.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{post.name}</h2>
          <p className="text-gray-700">{post.content}</p>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
