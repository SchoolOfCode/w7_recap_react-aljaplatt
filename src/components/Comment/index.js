import React from "react";
import "./style.css";

const Comment = () => {
  return (
    <div className="comment-container">
      <div className="avatar-container">
        <div className="avatar">BB</div>
        <h4>Billy Bootcamper</h4>
      </div>
      <div className="post">
        <p>Hello, great post</p>
      </div>
    </div>
  );
};

export default Comment;
