import React from 'react';
import '../style/PostDetails.scss';

const PostDetails = ({ post, author }) => {
  const formattedBody = post.body.replace(/\n/g, '<br>');

  return (
    <div className="post-details">
        <div className="parallax-post"> {/* Add parallax scrolling effect to this div */}
        <h2>{post.name}</h2>
      </div>
      <p className="author">Author: {author.name}</p>
      <p dangerouslySetInnerHTML={{ __html: formattedBody }}></p>
      <p className="likes-dislikes">Likes: {post.likes}</p>
      <p className="likes-dislikes">Dislikes: {post.dislikes}</p>
    </div>
  );
};

export default PostDetails;
