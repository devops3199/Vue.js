import { ActionContext as XActionContext } from "vuex";
import { RootState } from './state';
import { mutations, Mutations } from './mutations';
import { fetchUserInfo, fetchItem, fetchList } from "../api/index";

type ActionContext = {
  commit<K extends keyof typeof mutations>(
    key: K,
    payload?: Parameters<typeof mutations[K]>[1]
  ): ReturnType<typeof mutations[K]>;
} & Omit<XActionContext<RootState, RootState>, "commit">;

enum Actions {
  FETCH_LIST = 'FETCH_LIST',
  FETCH_USER_INFO = 'FETCH_USER_INFO',
  FETCH_ITEM = 'FETCH_ITEM',
}

const actions = {
  [Actions.FETCH_LIST] ({ commit }: { commit: ActionContext['commit'] }, type: string) {
    return fetchList(type)
      .then((response) => commit(Mutations.SET_LIST, { list: response.data }))
      .catch((err) => console.log(err));
  },
  [Actions.FETCH_USER_INFO] ({ commit }: { commit: ActionContext['commit'] }, id: string) {
    return fetchUserInfo(id)
      .then((response) => {
        commit(Mutations.SET_USER_INFO, { user: response.data });
      })
      .catch((err) => console.log(err));
  },
  [Actions.FETCH_ITEM] ({ commit }: { commit: ActionContext['commit'] }, id: string) {
    return fetchItem(id)
      .then((response) => {
        commit(Mutations.SET_ITEM, { item: response.data });
      })
      .catch((err) => console.log(err));
  },
};

export { actions, ActionContext, Actions };