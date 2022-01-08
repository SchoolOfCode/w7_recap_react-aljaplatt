import React, { useState } from "react";
import BlogPost from "../BlogPost";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import CommentsSection from "../CommentsSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BlogPost />
      <Comment />
      <CommentList />
      {/* <CommentForm />
      <CommentsSection /> */}
    </div>
  );
}

export default App;
