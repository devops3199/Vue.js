import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
} from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then((response) => {
        commit("SET_NEWS", { newsList: response.data });
      })
      .catch((err) => console.log(err));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then((response) => {
        commit("SET_JOBS", { jobs: response.data });
      })
      .catch((err) => console.log(err));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then((response) => {
        commit("SET_ASK", { askList: response.data });
      })
      .catch((err) => console.log(err));
  },
  FETCH_USER_INFO({ commit }, id) {
    fetchUserInfo(id)
      .then((response) => {
        commit("SET_USER_INFO", { user: response.data });
      })
      .catch((err) => console.log(err));
  },
};
