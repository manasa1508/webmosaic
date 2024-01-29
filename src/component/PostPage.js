import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostDetails from './PostDetails';
import Comments from './Comments';
import '../style/PostPage.scss';

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://webmosaic.petrichor.events/post?id=${postId}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        fetch(`https://webmosaic.petrichor.events/author?id=${data.author_id}`)
          .then(response => response.json())
          .then(authorData => setAuthor(authorData))
          .catch(error => console.error('Error fetching author:', error));
      })
      .catch(error => console.error('Error fetching post:', error));
  }, [postId]);

  const handleBack = () => {
    navigate(-1);
  };

  if (!post || !author) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-page">
      <button onClick={handleBack}>Back</button>
      <PostDetails post={post} author={author} />
      <Comments postId={postId} />
    </div>
  );
};

export default PostPage;
