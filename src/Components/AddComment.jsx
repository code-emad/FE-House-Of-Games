import { useState } from "react";
import { addComment } from "../Utils/api";

export default function AddComment({ review_id, comments, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const username = "tickle122";

    setDisableButton(true);
    //update UI
    console.log(comments, "from addcomment 1");
    setComments((currComments) => {
      return [
        ...currComments,
        {
          created_at: new Date().toISOString(),
          votes: 0,
          author: username,
          body: newComment,
          comment_id: Date.now()
        },
      ];
    });
    console.log(comments, " from addcomment 2");

    //making the request
    // addComment(review_id, newComment)
    //   .then((data) => {
    //     setNewComment("");
    //     setDisableButton(false);
    //   })
    //   .catch((err) => console.log(err));
  }
  return (
    <section>
      <br />
      <form onSubmit={handleSubmit}>
        <textarea
          required
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button disabled={disableButton}>Submit</button>
      </form>
    </section>
  );
}
