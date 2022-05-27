export default {
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
};
