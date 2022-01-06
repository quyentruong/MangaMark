export default {
  setSnackbar({ commit }, snackbar) {
    snackbar.showing = true
    snackbar.timeout = 2000
    snackbar.color = snackbar.color || 'success'
    commit('SET_SNACKBAR', snackbar)
  },
}
