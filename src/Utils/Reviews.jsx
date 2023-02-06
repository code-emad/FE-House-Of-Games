import axios from "axios";

export const getReviews = () => {
  return axios
    .get("https://emads-be-project.onrender.com/api/reviews/")
    .then(({ data }) => {
      return data;
    });
};
