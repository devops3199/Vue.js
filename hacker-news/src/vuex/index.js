import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsList: [],
    jobs: [],
    askList: [],
  },
  mutations: {
    SET_NEWS(state, payload) {
      const { newsList } = payload;

      state.newsList = newsList;
    },
    SET_JOBS(state, payload) {
      const { jobs } = payload;

      state.jobs = jobs;
    },
    SET_ASK(state, payload) {
      const { askList } = payload;

      state.askList = askList;
    },
  },
  actions: {
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
  },
});
