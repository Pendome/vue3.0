import { createStore } from 'vuex'
import personal from './personal'
const modules = {
  personal
};
const store = createStore({ modules });

export default store;