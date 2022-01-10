import React, { useState } from "react";
import BlogPost from "../BlogPost";
import Comment from "../Comment";
import CommentList from "../CommentList";
import "./App.css";
import "../Comment/style.css";

function App() {
  const [posts, setPosts] = useState([
    {
      author: "Molly Bootcamper",
      text: "Hey, great post",
      id: 1,
    },
    { author: "Chris Meah", text: "Many thank yous", id: 2 },
  ]);
  return (
    <div className="App">
      <BlogPost />
      <CommentList
        posts={posts}
        addPost={(item) => setPosts([...posts, item])}
      />
    </div>
  );
}

export default App;
