<template>
  <v-row align="center" justify="center">
    <v-col xs="12" sm="8">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Register form</v-toolbar-title>
        </v-toolbar>
        <v-card-text @keyup.enter="register">
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="form.name"
              :rules="[required('Name')]"
              :error-messages="modelstate['name']"
              label="Name"
              prepend-icon="mdi-account"
              type="text"
            />

            <v-text-field
              v-model="form.email"
              :rules="[required('Email'), email()]"
              :error-messages="modelstate['email']"
              label="Email"
              prepend-icon="mdi-email"
              type="email"
            />

            <v-text-field
              v-model="form.password"
              :rules="[required('Password'), minLength('Password', 8)]"
              :error-messages="modelstate['password']"
              label="Password"
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
              label="Confirmation Password"
              prepend-icon="mdi-lock"
              :type="show2 ? 'text' : 'password'"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show2 = !show2"
            />
            <recaptcha @error="onError" @expired="onExpired" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="register"> Create a account </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import validations from '@/utils/validations'
export default {
  name: 'Register',
  auth: 'guest',
  data: () => ({
    show1: false,
    show2: false,
    modelstate: {},
    form: {},
    ...validations,
  }),
  head() {
    return {
      title: 'Register',
      //   meta: [
      //     { hid: 'description', name: 'description', content: 'Sign up to explore new world of MangaMark' }
      //   ]
    }
  },
  methods: {
    onError() {
      this.$store.dispatch('setSnackbar', {
        color: 'error',
        text: 'You need to check "I\'m not a robot"',
      })
    },
    onExpired() {
      this.$store.dispatch('setSnackbar', {
        color: 'error',
        text: 'Verification expired. Check the box again',
      })
    },
    async register() {
      if (this.$refs.form.validate()) {
        try {
          await this.$recaptcha.getResponse()
        } catch (error) {
          return
        }
        this.modelstate = {}
        await this.$axios
          .$post('auth/register', this.form)
          .then(() => {
            this.$router.push('/guest/verify')
          })
          .catch((error) => {
            if (error.response.status === 422) {
              this.modelstate = error.response.data.error
            }
          })
      }
    },
  },
}
</script>

<style scoped></style>
