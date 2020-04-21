<template>
  <div>
    <div v-if="len === 0" class="text-center">
      An email verification has sent to your account. You need to verify it before login.
    </div>
    <template v-else>
      <v-row
        v-if="!verify && !error"
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
          Verifying your account
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="primary"
            indeterminate
            rounded
            height="6"
          />
        </v-col>
      </v-row>
      <template v-else-if="verify">
        <div class="text-center">
          Verify Completed. You can login now.
        </div>
        <div class="text-center">
          <v-icon color="primary" size="50">
            mdi-check-circle
          </v-icon>
        </div>
      </template>
      <div v-else-if="error" class="display-1 text-center">
        {{ errorMessage }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Verify',
  auth: 'guest',
  data: () => ({
    len: 0,
    verify: false,
    error: false,
    errorMessage: 'Email or token is invalid'
  }),
  created () {
    const query = this.$route.query
    this.len = Object.keys(query).length
    this.$axios.$post('auth/verify', query).then((response) => {
      setTimeout(() => { this.verify = true }, 2000)
    })
      .catch((error) => {
        if (error.response.status === 401) {
          this.errorMessage = error.response.data.error
        } else {
          this.errorMessage = 'Invalid verify url'
        }
        setTimeout(() => { this.error = true }, 2000)
      })
  }
}
</script>

<style scoped>

</style>
