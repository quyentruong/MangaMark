<template>
  <v-app>
    <v-app-bar :color="$vuetify.theme.dark === true ? '' : 'blue'" app dark>
      <v-toolbar-title class="white--text">
        <v-btn :color="$vuetify.theme.dark === true ? '' : 'white'" to="/" icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn
          :color="$vuetify.theme.dark === true ? '' : 'white'"
          to="/faq"
          icon
        >
          <v-icon>mdi-chat-question</v-icon>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-label>{{ $vuetify.breakpoint.name }}</v-label>
      <v-spacer />
      <v-label>{{ $vuetify.breakpoint.width }}</v-label>
      <v-btn icon @click="setDark">
        <v-icon v-if="$vuetify.theme.dark"> mdi-brightness-6 </v-icon>
        <v-icon v-else> mdi-brightness-7 </v-icon>
      </v-btn>
      <v-toolbar-items>
        <template v-if="$auth.loggedIn">
          <v-menu offset-y close-on-content-click>
            <template #activator="{ on }">
              <v-btn
                :icon="$vuetify.breakpoint.name === 'xs'"
                text
                color="white"
                dark
                v-on="on"
              >
                <v-icon v-if="$vuetify.breakpoint.name === 'xs'">
                  mdi-account
                </v-icon>
                <span v-else class="bartitle" style="text-transform: none"
                  >Welcome, {{ $auth.user.email }}</span
                >
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/profile">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-icon>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <template v-else>
          <v-btn to="/guest/register" color="white" text> Sign Up </v-btn>
          <v-btn to="/guest/login" color="white" text> Login </v-btn>
        </template>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter((s) => s.showing)"
      :key="snackbar.text + Math.random()"
      v-model="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: ${index * 60 + 8}px`"
    >
      {{ snackbar.text }}

      <v-btn text @click="snackbar.showing = false"> Close </v-btn>
    </v-snackbar>
    <v-footer app>
      <span>&copy; Quyen Truong {{ new Date().getFullYear() }}</span>

      <v-btn
        :color="$vuetify.theme.dark === true ? '' : 'white'"
        icon
        @click="source"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMultiRowFields } from 'vuex-map-fields'
export default {
  computed: {
    ...mapMultiRowFields(['snackbars']),
  },
  created() {
    // console.log(this.$vuetify.breakpoint)
    this.$vuetify.theme.dark = this.$warehouse.get('dark', false)
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$store.dispatch('setSnackbar', { text: 'Logging out' })
    },
    setDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$warehouse.set('dark', this.$vuetify.theme.dark)
    },
    source() {
      window.open('https://github.com/quyentruong/MangaMark')
    },
  },
}
</script>
<style>
.theme--dark.v-icon,
.theme--light.v-icon {
  opacity: 1 !important;
}
/*@media (max-width:400px) and (min-width:300px) {*/
/*  .bartitle {*/
/*    font-size: 7px;*/
/*  }*/
/*}*/
/*@media (max-width:600px) and (min-width:401px) {*/
/*  .bartitle {*/
/*    font-size: 12px;*/
/*  }*/
/*}*/
</style>
