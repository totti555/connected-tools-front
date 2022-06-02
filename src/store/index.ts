import { createStore } from "vuex";
import GelStore from "./gelStore";

const stores = {
  gel: GelStore,
};

const modules = Object.entries(stores).reduce(
  (_modules: any, [name, store]) => {
    _modules[name] = {
      namespaced: true,
      ...store,
    };
    return _modules;
  },
  {}
);

const $store = createStore({
  modules,
  strict: process.env.NODE_ENV !== "production",
});

export default $store;
