<template>
  <v-row align="center" justify="center">
    <v-col xs="12" sm="8">
      <v-card class="elevation-12" @keyup.enter="request">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Request new password form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" lazy-validation @submit.prevent>
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
          <v-btn color="primary" @click="request"> Request </v-btn>
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
    ...validations,
  }),
  head() {
    return {
      title: 'Forgot Password',
      //   meta: [
      //     { hid: 'description', name: 'description', content: "Don't worry if you forgot your password" }
      //   ]
    }
  },
  methods: {
    async request() {
      if (this.$refs.form.validate()) {
        await this.$axios
          .$post('auth/recovery', this.form)
          .then((response) => {
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
    },
  },
}
</script>

<style scoped></style>
