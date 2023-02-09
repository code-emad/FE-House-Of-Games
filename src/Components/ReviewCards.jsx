import { useNavigate } from "react-router-dom";
import Votes from "./Votes";


export default function ReviewCards({ reviews }) {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`review/${id}`);
  };

  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.review_id}>
            <h3>
              {review.review_id}. {review.title}
            </h3>
            <p>
              User: {review.owner} @{" "}
              {review.created_at.slice(0, 16).replace("T", " ")}
            </p>
            <img src={review.review_img_url} alt="pic_of_game" height="100px" />
            <p>Category: {review.category}</p>
            <p>Comment count: {review.comment_count}</p>
            <Votes votes={review.votes} review_id={review.review_id} />

            <br />

            <button onClick={() => handleOnClick(review.review_id)}>
              View full review
            </button>
          </li>
        );
      })}
    </ul>
  );
}
