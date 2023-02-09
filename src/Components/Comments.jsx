import { getCommentsById } from "../Utils/api";
import { useEffect, useState } from "react";

export default function Comments({ review_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsById(review_id).then((comments) => {
      setComments(comments);
    });
  }, [review_id]);

  return (
    <section>
      <h3 className="commentsTitle">Comments</h3>
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
            </li>
          );
        })}
      </ul>
    </section>
  );
}
