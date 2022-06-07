import { RootState } from './state';

enum Mutations {
  SET_LIST = 'SET_LIST',
  SET_ITEM = 'SET_ITEM',
  SET_USER_INFO = 'SET_USER_INFO',
}

const mutations = {
  [Mutations.SET_LIST] (state: RootState, payload: { list: RootState['list'] }) {
    const { list } = payload;
    state.list = list;
  },
  [Mutations.SET_ITEM] (state: RootState, payload: { item: RootState['item'] }) {
    const { item } = payload;
    state.item = item;
  },
  [Mutations.SET_USER_INFO] (state: RootState, payload: { user: RootState['user'] }) {
    const { user } = payload;
    state.user = user;
  }
}

export { Mutations, mutations };
