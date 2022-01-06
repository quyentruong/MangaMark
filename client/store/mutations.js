import { updateField } from 'vuex-map-fields'
export default {
  form(state, name) {
    state.form[name] = name
  },
  setArrayHeader(state, obj) {
    state.currentHeader[obj.slot] = obj.array
  },
  SET_SNACKBAR(state, snackbar) {
    if (state.snackbars.length >= 5) {
      state.snackbars.shift()
    }
    state.snackbars = state.snackbars.concat(snackbar)
  },
  updateField,
}
