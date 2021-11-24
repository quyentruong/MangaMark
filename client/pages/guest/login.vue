<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      xs="12"
      sm="8"
    >
      <v-card class="elevation-12">
        <v-toolbar
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text @keyup.enter="login">
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="form.email"
              :rules="[required('Email'), email()]"
              label="Email"
              prepend-icon="mdi-email"
              type="email"
            />

            <v-text-field
              v-model="form.password"
              :rules="[required('Password')]"
              label="Password"
              prepend-icon="mdi-lock"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="login" color="primary">
            Login
          </v-btn>
          <v-spacer />
          <v-btn color="primary" to="/guest/forgot-password" text>
            Forgot your password?
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import validations from '@/utils/validations'
export default {
  name: 'Login',
  auth: 'guest',
  data: () => ({
    form: {},
    ...validations
  }),
  head () {
    return {
      title: 'Login'
      //   meta: [
      //     { hid: 'description', name: 'description', content: 'Ready to explore new world of MangaMark' }
      //   ]
    }
  },
  methods: {
    async login () {
      if (this.$refs.form.validate()) {
        await this.$axios.$post('auth/login', this.form).then(() => {
          this.$auth.login({ data: this.form })
          this.$store.dispatch('setSnackbar', { text: 'Logging in' })
        })
          .catch((error) => {
            if (error.response.status === 404 || error.response.status === 401) {
              this.$store.dispatch('setSnackbar', { color: 'error', text: error.response.data.error })
            }
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
