<template>
  <v-row align="center" justify="center">
    <v-col xs="12" sm="8">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Reset form</v-toolbar-title>
        </v-toolbar>
        <v-card-text @keyup.enter="reset">
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="form.token"
              label="Token"
              prepend-icon="mdi-coin"
              disabled
            />
            <v-text-field
              v-model="form.email"
              :rules="[required('Email'), email()]"
              :error-messages="modelstate['email']"
              label="Current Email"
              prepend-icon="mdi-email"
              type="email"
            />
            <v-text-field
              v-model="form.password"
              :rules="[required('Password'), minLength('Password', 8)]"
              :error-messages="modelstate['password']"
              label="New Password"
              prepend-icon="mdi-lock"
              :type="show1 ? 'text' : 'password'"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
            />

            <v-text-field
              v-model="form.password_confirmation"
              :rules="[
                required('Confirmation Password'),
                passwordConfirmation(form.password, form.password_confirmation),
              ]"
              label="Confirmation New Password"
              prepend-icon="mdi-lock"
              :type="show2 ? 'text' : 'password'"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show2 = !show2"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="reset"> Reset </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import validations from '@/utils/validations'
export default {
  auth: 'guest',
  name: 'ResetPassword',
  data: () => ({
    show1: false,
    show2: false,
    modelstate: {},
    form: {},
    ...validations,
  }),
  head() {
    return {
      title: 'Reset Password',
      //   meta: [
      //     { hid: 'description', name: 'description', content: 'Reset password to get access again' }
      //   ]
    }
  },
  created() {
    this.form.token = this.$route.query.token
  },
  methods: {
    async reset() {
      if (this.$refs.form.validate()) {
        this.modelstate = {}
        await this.$axios
          .$post('auth/reset', this.form)
          .then((response) => {
            const query = Object.assign({}, this.$route.query)
            delete query.token
            this.$router.replace({ query })
            this.$store.dispatch('setSnackbar', { text: response.message })
            this.$auth.login({ data: this.form })
          })
          .catch((error) => {
            if (error.response.status === 422) {
              this.modelstate = error.response.data.error
            } else if (error.response.status === 401) {
              this.$store.dispatch('setSnackbar', {
                color: 'error',
                text: error.response.data.error,
              })
            }
          })
      }
    },
  },
}
</script>

<style scoped></style>
