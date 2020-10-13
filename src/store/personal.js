export default {
  state: {
    userInfo: '石头人大招',
  },

  mutations: {
    SET_USERINFO: (state, data) => {
      state.userInfo = data;
    },
  },

  getters: {},

  actions: {
    getUserInfo({
      commit,
      state,
      dispatch
    }, params) {
      console.log('石头人大招')
      commit('SET_USERINFO', '石头人大招')
    },
  }
};