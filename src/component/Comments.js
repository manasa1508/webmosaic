// Comments.js
import React, { useEffect, useState } from 'react';
import '../style/Comments.scss'; 

const Comments = ({ postId, length}) => {
  const [commentBody, setCommentBody] = useState('');
useEffect(() => {
  const fetchComments = async () => {
    const allComments = [];
      const response = await fetch(`https://webmosaic.petrichor.events/comments?post_id=${postId}`);
      if (response.headers.get('Content-Type') === 'application/json') {
        const data = await response.json();
        allComments.push(...data);
      }
    allComments.map(comment => {
      if(comment.post_id == postId){
        setCommentBody(comment.body)
        } 
      }
    )
  };
  fetchComments();
}, [length]);


console.log(length)
  if (commentBody.length === 0) {
    return <div className="no-comments">No comments found for this post.</div>; 
  }

  return (
    <div className="comments-container"> 
      <h3>Comments</h3>
      <div className="comment">
        <p>{commentBody}</p>
      </div>
    </div>
  );
};

export default Comments;
