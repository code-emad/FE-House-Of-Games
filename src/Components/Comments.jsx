import { getCommentsById } from "../Utils/api";
import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment.jsx";

export default function Comments({ review_id }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    getCommentsById(review_id).then((comments) => {
      setComments(comments);
    })
    .catch((err) => {setError(err)})

  }, [review_id]);

  if (error) {return <p>{error.response.data.msg}</p>}

  return (
    <section>
      <h3 className="commentsTitle">Comments</h3>

      <AddComment 
      comments={comments}
      setComments={setComments}
    
      review_id={review_id} />
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>
                {comment.author} @{" "}
                {comment.created_at.slice(0, 16).replace("T", " ")}
              </p>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              <DeleteComment 
              comments={comments}
              setComments={setComments}
              comment_id={comment.comment_id} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
