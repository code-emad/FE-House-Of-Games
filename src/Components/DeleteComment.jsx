import { useState } from "react";
import { removeComment } from "../Utils/api";

export default function DeleteFunction({ comment_id, comments, setComments}) {
  const [disableDelete, setDisableDelete] = useState(false);

  const deleteComment = (comment_id) => {
    setDisableDelete(true);
    //ui update
    const updatedList = comments.filter((comment) => comment_id !== comment.comment_id)
    setComments(updatedList)
    //action request
    removeComment(comment_id);
    setDisableDelete(false)
    .catch(err => console.log(err))
  };

  return (
    <button onClick={() => deleteComment(comment_id)} disabled={disableDelete}>
      Delete
    </button>
  );
}
