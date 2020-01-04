const state = {
  username: '',
  password: ''
}

const getters = {

}

const actions = {
  login ({ commit }, auth) {
    commit('login', auth)
  }
}

const mutations = {
  login (state, { username, password }) {
    state.username = username
    state.password = password
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}