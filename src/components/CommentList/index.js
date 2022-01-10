import "../Comment/style.css";
import Comment from "../Comment";
import CommentForm from "../CommentForm";

const CommentList = ({ posts, addPost }) => {
  return (
    <section>
      <ul>
        {posts.map((item, idx) => (
          <div key={idx}>
            <Comment author={item.author} text={item.text} />
            <hr />
          </div>
        ))}
      </ul>
      <CommentForm onSubmit={addPost} />
    </section>

    // <div className="comment-container">
    //   <div className="avatar-container">
    //     <div className="avatar">{avatar}</div>
    //     <h4>{author}</h4>
    //   </div>
    //   <div className="post">
    //     <p>{text}</p>
    //   </div>
    // </div>
  );
};

export default CommentList;
