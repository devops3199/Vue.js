import { CommitOptions, Store, DispatchOptions } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof typeof mutations, P extends Parameters<typeof mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<typeof mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof typeof actions>(
    key: K,
    payload?: Parameters<typeof actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<typeof actions[K]>;
};

type MyGetters = {
  getters: {
    [K in keyof typeof getters]: ReturnType<typeof getters[K]>;
  };
};

export type MyStore = Omit<
  Store<RootState>,
  "commit" | "dispatch" | "getters"
> &
  MyMutations
  &
  MyActions
  &
  MyGetters
 