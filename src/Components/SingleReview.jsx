import { useEffect, useState } from "react";
import { getReviewById } from "../Utils/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SingleReview() {
  const navigate = useNavigate();
  const [searchedId, setSearchedId] = useState("");
  const [review, setReview] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    getReviewById(searchedId).then((review) => {
      setReview(review);
    });
    navigate(`/review/${searchedId}`);
  };

  const { review_id } = useParams();
  useEffect(() => {
    if (review_id)
      getReviewById(review_id).then((review) => {
        setReview(review);
      });
  }, []);

  const searchedReview = !review.hasOwnProperty("review_body") ? (<p></p>) 
  : (
    <section>
      <h3>
        {review.review_id}. {review.title}
      </h3>
      <p>
        User: {review.owner} @{" "}
        {review.created_at?.slice(0, 16).replace("T", " ")}
      </p>
      <img src={review.review_img_url} alt="pic_of_game" height="100px" />
      <p>Review: {review.review_body}</p>
      <p>Designer: {review.designer}</p>
      <p>Category: {review.category}</p>
      <p>Comment count: {review.comment_count}</p>
      <p>Votes: {review.votes}</p>
      <button>+</button>
      <button>-</button>
    </section>
  );

  return (
    <section>
      <h2>Single Review</h2>
      <form onSubmit={handleSubmit}>
        <label>Insert review ID</label>
        <input
          type="number"
          value={searchedId}
          onChange={(e) => setSearchedId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {searchedReview}
    </section>
  );
}
