const axios = require("axios");

function run(character) {
  return axios
    .get(`https://challenges.hackajob.co/swapi/api/people/?search=${character}`)
    .then(({ data }) => {
      let axiosResults = data.results;
      for (let i = 0; i < axiosResults.length; i++) {
        if (axiosResults[i].name === character) {
          return axiosResults[i].films.length;
        }
      }
    });
}
