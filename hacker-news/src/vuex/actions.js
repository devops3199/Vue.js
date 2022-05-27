import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit("SET_NEWS", { newsList: response.data });
      })
      .catch((err) => console.log(err));
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((response) => {
        context.commit("SET_JOBS", { jobs: response.data });
      })
      .catch((err) => console.log(err));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((response) => {
        context.commit("SET_ASK", { askList: response.data });
      })
      .catch((err) => console.log(err));
  },
};
