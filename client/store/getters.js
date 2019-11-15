import { getField } from 'vuex-map-fields'
export default {
  passwordConfirmationRules (state) {
    return (password, passwordConfirmation) => {
      return [
        v => !!v || 'Confirmation Password is required',
        () => (password === passwordConfirmation) || 'Password must match'
      ]
    }
  },
  getField
}
