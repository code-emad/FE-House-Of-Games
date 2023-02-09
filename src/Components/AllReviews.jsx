import { useEffect, useState } from "react";
import { getReviews } from "../Utils/api";
import ReviewCards from "./ReviewCards";
import { useSearchParams } from "react-router-dom";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("Desc");

  useEffect(() => {
    getReviews(category, sortBy, order).then((reviews) => {
      setReviews(reviews);
    });
  }, [category, sortBy, order]);

  return (
    <section>
      <h2 className="allReviewsTitle">All Reviews</h2>
      <p>Sort by:</p>
      <button
        onClick={() => {
          setSortBy("created_at");
        }}
      >
        Date
      </button>
      <button
        onClick={() => {
          setSortBy("comment_count");
        }}
      >
        Comment count
      </button>
      <button
        onClick={() => {
          setSortBy("votes");
        }}
      >
        Votes
      </button>
      <br></br>
      <button
        onClick={() => {
          setOrder("DESC");
        }}
      >
        Desc
      </button>
      <button
        onClick={() => {
          setOrder("ASC");
        }}
      >
        Asc
      </button>

      {reviews?.length > 0 ? (
        <ReviewCards reviews={reviews} />
      ) : (
        <p>Category not found</p>
      )}
    </section>
  );
}
