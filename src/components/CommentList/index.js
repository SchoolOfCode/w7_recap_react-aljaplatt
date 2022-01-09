import React, { useState } from "react";
import "../Comment/style.css";
import Comment from "../Comment";

const CommentList = ({ author, text, avatar }) => {
  return (
    <div className="comment-container">
      <div className="avatar-container">
        <div className="avatar">{avatar}</div>
        <h4>{author}</h4>
      </div>
      <div className="post">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentList;
