import { useEffect, useState } from "react";
import { getReviews } from "../Utils/api";
import ReviewCards from "./ReviewCards";
import { useSearchParams } from "react-router-dom";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    getReviews(category).then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <section>
      <h2 className="allReviewsTitle">All Reviews</h2>

      {reviews.length > 0 ? (
        <ReviewCards reviews={reviews} />
      ) : (
        <p>Category not found</p>
      )}
    </section>
  );
}
