import { useState } from "react";
import { addComment } from "../Utils/api";

export default function AddComment({ review_id }) {
  const [newComment, setNewComment] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

 
    setDisableButton(true);
    addComment(review_id, newComment)
      .then((data) => {
        setNewComment("");
        setDisableButton(false);
      })
      .catch((err) => console.log(err));
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
