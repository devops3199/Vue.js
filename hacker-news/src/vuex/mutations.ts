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
  SET_USER_INFO(state, payload) {
    const { user } = payload;

    state.user = user;
  },
  SET_ITEM(state, payload) {
    const { item } = payload;

    state.item = item;
  },
  SET_LIST(state, payload) {
    const { list } = payload;

    state.list = list;
  },
};
