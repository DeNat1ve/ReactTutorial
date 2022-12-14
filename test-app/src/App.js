import React, { useState } from "react";
import PostForm from "./components/CreatePostForm";
import PostList from "./components/PostList";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 1', body: 'Description' },
    { id: 3, title: 'JavaScript 2', body: 'Description' }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ? < PostList remove={removePost} posts={posts} title="List 1" />
        : <h1>Not found</h1>
      }
    </div>
  );
}

export default App;
