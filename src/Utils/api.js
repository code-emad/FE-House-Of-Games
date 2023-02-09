import axios from "axios";

export const getReviews = () => {
  return axios
    .get("https://emads-be-project.onrender.com/api/reviews/")
    .then(({ data }) => {
      return data;
    });
};

export const getReviewById = (review_id) => {
  return axios
    .get(`https://emads-be-project.onrender.com/api/reviews/${review_id}`)
    .then(({ data }) => {
      return data;
    });
};

export const getCommentsById = (review_id) => {
  return axios
    .get(
      `https://emads-be-project.onrender.com/api/reviews/${review_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};

export const patchVotesById = (review_id, incVotes) => {
  const patchBody = {
    inc_votes: incVotes,
  };
  return axios
  .patch(
    `https://emads-be-project.onrender.com/api/reviews/${review_id}`,
    patchBody
  );
};
