import { RootState } from './state';

const getters = {
  fetchedUserInfo(state: RootState) {
    return state.user;
  },
  fetchedItem(state: RootState) {
    return state.item;
  },
  fetchedList(state: RootState) {
    return state.list;
  },
};

export { getters };
