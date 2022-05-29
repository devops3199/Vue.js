import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItem,
  fetchList,
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
  FETCH_LIST({ commit }, type) {
    fetchList(type)
      .then((response) => commit("SET_LIST", { list: response.data }))
      .catch((err) => console.log(err));
  },
  FETCH_USER_INFO({ commit }, id) {
    fetchUserInfo(id)
      .then((response) => {
        commit("SET_USER_INFO", { user: response.data });
      })
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, id) {
    fetchItem(id)
      .then((response) => {
        commit("SET_ITEM", { item: response.data });
      })
      .catch((err) => console.log(err));
  },
};
