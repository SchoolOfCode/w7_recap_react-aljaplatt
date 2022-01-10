import { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  // user input
  const [author, setAuthor] = useState("Default Username");
  const [comment, setComment] = useState("");

  // function that handles form submission
  function handleSubmit(e) {
    // if the comment is empty, shall not pass
    e.preventDefault();
    if (comment.length === 0) {
      return;
    }
    onSubmit({ author, text: comment });
    // clear comment field
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Enter your comment:
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
