// Post.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://webmosaic.petrichor.events/post?id=${id}`)
      .then(response => response.json())
      .then(data => setPost(data));

    fetch(`https://webmosaic.petrichor.events/author?id=${id}`)
      .then(response => response.json())
      .then(data => setAuthor(data));

    fetch(`https://webmosaic.petrichor.events/comments?post_id=${id}`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [id]);

  if (!post || !author) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post">
      <h2 className="post-title">{post.name}</h2>
      <p className="post-author">Author: {author.name}</p>
      <p className="post-likes">Likes: {post.likes}</p>
      <p className="post-dislikes">Dislikes: {post.dislikes}</p>
      <div className="post-content">{post.body}</div>
      {comments.length > 0 ? (
        <div className="post-comments">
          <h3>Comments</h3>
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No comments found for this post.</div>
      )}
    </div>
  );
}

export default Post;
