import { useState } from "react";
import { patchVotesById } from "../Utils/api";

export default function Votes({ votes, review_id }) {
  const [voteChange, setVoteChange] = useState(0);

  const incVotes = () => {
    setVoteChange((currChange) => currChange + 1);
    patchVotesById(review_id, 1)
    .catch(err => console.log(err))

  };

  const decVotes = () => {
    setVoteChange((currChange) => currChange - 1);
    patchVotesById(review_id, -1)
    .catch(err => console.log(err))
  };

  return (
    <div>
      <p>Votes: {votes + voteChange}</p>
      <button disabled={voteChange === -1} onClick={() => decVotes()}>
        -
      </button>
      <button disabled={voteChange === 1} onClick={() => incVotes()}>
        +
      </button>
    </div>
  );
}
