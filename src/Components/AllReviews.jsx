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
  const [error, setError] = useState(null)

  useEffect(() => {
    getReviews(category, sortBy, order).then((reviews) => {
      setReviews(reviews);
    })
    .catch(err => console.log(err, 'allrevs'))
  }, [category, sortBy, order])

  if (error) {return <p>{error.response.data}</p>}

  return (
    <section>
      <h2 className="allReviewsTitle">{category ? category : 'All Reviews'}</h2>
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
