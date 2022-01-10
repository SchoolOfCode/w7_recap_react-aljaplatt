import React from "react";
import "./style.css";

const Comment = ({ author, text }) => {
  return (
    <li className="comment-container">
      <div className="avatar-container">
        <div className="avatar">
          {author
            .split(" ")
            .map((item) => item[0])
            .join("")}
        </div>
        <h4>{author}</h4>
      </div>
      <div className="post">
        <p>{text}</p>
      </div>
    </li>
  );
};

export default Comment;
