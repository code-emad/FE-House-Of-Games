import { useEffect, useState } from "react";
import { getReviews } from "../Utils/api";
import ReviewCards from "./ReviewCards";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <section>
      <h2 className="allReviewsTitle">All Reviews</h2>

      <ReviewCards reviews={reviews} />
    </section>
  );
}
