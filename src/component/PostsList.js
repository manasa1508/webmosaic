// PostsList.js
import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
