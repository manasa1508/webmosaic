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
  const [length, setLength] = useState(0);
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
      //console.log(length)
  }, [postId]);

  useEffect(() => {
    fetch('https://webmosaic.petrichor.events/posts')
      .then(response => response.json())
      .then(data => setLength(data.posts.length)) // Set length of posts
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

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
      <Comments postId={postId} length={length} />
    </div>
  );
};

export default PostPage;
