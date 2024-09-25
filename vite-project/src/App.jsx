import { useEffect, useState } from 'react';
import { PostListClick } from './Components/PostListClick';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchDataPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };
  // useEffect(() => {
  //   fetchDataPosts();
  // }, []);

  function handleButtonClick() {
    fetchDataPosts();
  }

  return (
    <>
      <button onClick={handleButtonClick}> Push to get Posts</button>
      {!!posts.length && <PostListClick posts={posts} />}
    </>
  );
}

export default App;
