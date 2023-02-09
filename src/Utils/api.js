import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://emads-be-project.onrender.com/api",
});

export const getReviews = (category) => {
  let path = "/reviews";
  if (category) {
    path += `?category=${category}`;
  }
  return gamesAPI.get(path).then(({ data }) => {
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


export const addComment = (review_id, comment) => {
  const postBody = {
    username: "tickle122",
    body: comment,
  };
  return axios
    .post(
      `https://emads-be-project.onrender.com/api/reviews/${review_id}/comments`,
      postBody
    )
    .then(({ data }) => {
      return data;
    });
};


export const removeComment = (comment_id) => {
  let path = `/comments/${comment_id}`;

  return gamesAPI.delete(path);
}


export const getCategories = () => {
  const path = "/categories";

  return gamesAPI.get(path).then(({ data }) => {
    return data;
  });

}
