<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="primary" dark text>
          Change Password
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Change to New Password</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="form.current_password"
              :rules="[required('Current Password')]"
              :error-messages="modelstate['current_password']"
              label="Current Password"
              prepend-icon="mdi-lock"
              type="password"
            />

            <v-text-field
              v-model="form.new_password"
              :rules="[required('New Password'), minLength('Password', 8)]"
              label="New Password"
              prepend-icon="mdi-lock"
              type="password"
            />

            <v-text-field
              v-model="form.new_password_confirmation"
              :rules="[required('Confirmation New Password'), passwordConfirmation(form.new_password, form.new_password_confirmation)]"
              label="Confirmation New Password"
              prepend-icon="mdi-lock"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="close" color="blue darken-1" text>
            Close
          </v-btn>
          <v-btn @click="savePassword" color="blue darken-1" text>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import validations from '@/utils/validations'
export default {
  name: 'PasswordForm',
  data: () => ({
    dialog: false,
    form: {},
    modelstate: {},
    ...validations
  }),
  computed: {
    passwordConfirmationRules () {
      return this.$store.getters.passwordConfirmationRules(this.form.new_password, this.form.new_password_confirmation)
    }
  },
  methods: {
    async savePassword () {
      if (this.$refs.form.validate()) {
        this.modelstate = {}
        await this.$axios.$put('profile/password', this.form).then(() => {
          this.dialog = false
          this.$store.dispatch('setSnackbar', { text: 'Saved Changes' })
          this.$refs.form.reset()
        })
          .catch((error) => {
            if (error.response.status === 422) {
              this.modelstate = error.response.data.error
            }
          })
      }
    },
    close () {
      this.$refs.form.reset()
      this.$store.dispatch('setSnackbar', { color: 'error', text: 'Canceled' })
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>
