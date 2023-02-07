import axios from "axios";

export const getReviewById = (reviewId) => {
  return axios
    .get(`https://emads-be-project.onrender.com/api/reviews/${reviewId}`)
    .then(({ data }) => {
      return data;
    });
};

export const getReviews = () => {
  return axios
    .get("https://emads-be-project.onrender.com/api/reviews/")
    .then(({ data }) => {
      return data;
    });
};
