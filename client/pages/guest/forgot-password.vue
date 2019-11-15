<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      xs="12"
      sm="8"
    >
      <v-card @keyup.enter="request" class="elevation-12">
        <v-toolbar
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>Request new password form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" @submit.prevent lazy-validation>
            <v-text-field
              v-model="form.email"
              :rules="[required('Email'), email()]"
              :error-messages="modelstate['email']"
              label="Email"
              prepend-icon="mdi-email"
              type="email"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="request" color="primary">
            Request
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import validations from '@/utils/validations'
export default {
  name: 'ForgotPassword',
  auth: 'guest',
  data: () => ({
    modelstate: {},
    form: {},
    ...validations
  }),
  head: {
    title: 'Forgot Password',
    meta: [
      { hid: 'description', name: 'description', content: "Don't worry if you forgot your password" }
    ]
  },
  methods: {
    async request () {
      if (this.$refs.form.validate()) {
        await this.$axios.$post('auth/recovery', this.form).then((response) => {
          this.$store.dispatch('setSnackbar', { text: response.message })
          this.modelstate = {}
          this.$refs.form.reset()
        })
          .catch((error) => {
            if (error.response.status === 401) {
              this.modelstate = error.response.data.error
            }
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
