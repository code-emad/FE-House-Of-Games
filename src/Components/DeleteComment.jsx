import { useState } from "react";
import { removeComment } from "../Utils/api";

export default function DeleteFunction({ comment_id }) {
  const [disableDelete, setDisableDelete] = useState(false);

  const deleteComment = (comment_id) => {
    setDisableDelete(true);
    removeComment(comment_id);
  };

  return (
    <button onClick={() => deleteComment(comment_id)} disabled={disableDelete}>
      Delete
    </button>
  );
}
