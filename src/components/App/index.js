import React, { useState } from "react";
import BlogPost from "../BlogPost";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import CommentsSection from "../CommentsSection";
import "./App.css";
import "../Comment/style.css";

function App({}) {
  const [posts, setPosts] = useState([
    {
      author: "Molly Bootcamper",
      text: "Hey, great post",
      id: 1,
      avatar: "MB",
    },
    { author: "Chris Meah", text: "Many thank yous", id: 2, avatar: "CM" },
  ]);

  // const handleAvatar = posts.forEach((post) => {
  //   const postAvatar =
  //     (post.author.split(" ")[0].split("")[0],
  //     post.author.split(" ")[post.author.split(" ").length - 1].split("")[0]);

  //   setPosts((posts.avatar = postAvatar));
  // });

  return (
    <div className="App">
      <BlogPost />
      <Comment />
      {posts.map((post) => {
        return (
          <CommentList
            author={post.author}
            text={post.text}
            avatar={post.avatar}
            key={post.id}
          />
        );
      })}
      {/* <CommentForm /> */}
      {/* <CommentsSection /> */}
    </div>
  );
}

export default App;
