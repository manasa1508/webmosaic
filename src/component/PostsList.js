// PostsList.js
import Post from './Post';
import React from 'react';
const PostsList = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default PostsList;
