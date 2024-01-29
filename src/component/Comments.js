// Comments.js
import React, { useEffect, useState } from 'react';
import '../style/Comments.scss'; // Import CSS file for Comments

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [id,setId]=useState(0);
  useEffect(() => {
    // Fetch comments for the specific post
    fetch(`https://webmosaic.petrichor.events/comments?post_id=6`)
      .then(response => response.json())
      .then(data => setComments(data))
      //.then(data => setId(id+1))
      .catch(error => console.error('Error fetching comments:', error));
  }, [id]);

  if (comments.length === 0) {
    return <div className="no-comments">No comments found for this post.</div>; {/* Add className to div */}
  }

  return (
    <div className="comments-container"> {/* Add className to div */}
      <h3>Comments</h3>
      {comments.map(comment => (
        comment.id === postId && (
          <div className="comment" key={comment.id}> {/* Add className to div */}
            <p>{comment.body}</p>
          </div>
        )
      ))}
    </div>
  );
};

export default Comments;
