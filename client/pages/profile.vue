<template>
  <v-card @keyup.enter="change" class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>Profile</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="$auth.user.id"
          label="Id"
          prepend-icon="mdi-music-accidental-sharp"
          disabled
        />
        <v-text-field
          v-model="userName"
          :rules="[required('Name')]"
          :error-messages="modelstate['name']"
          label="Name"
          prepend-icon="mdi-account"
          type="text"
        />

        <v-text-field
          v-model="userEmail"
          :rules="[required('Email'), email()]"
          :error-messages="modelstate['email']"
          label="Email"
          prepend-icon="mdi-email"
          type="email"
        />
        <v-row>
          <v-col>
            <v-text-field
              v-model="$auth.user.mangas_count"
              label="Number of Mangas"
              prepend-icon="mdi-book"
              disabled
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="$auth.user.animes_count"
              label="Number of Animes"
              prepend-icon="mdi-movie"
              disabled
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="$auth.user.tvshows_count"
              label="Number of TV Shows"
              prepend-icon="mdi-television"
              disabled
            />
          </v-col>
        </v-row>
        <v-text-field
          v-model="new Date($auth.user.created_at).toString()"
          label="Created At"
          prepend-icon="mdi-calendar"
          disabled
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-row style="margin-top: -30px">
        <v-col>
          <v-btn @click="change" color="primary">
            Save
          </v-btn>
        </v-col>
        <v-col offset-sm="6" offset-md="7" offset-lg="9" offset-xl="10">
          <PasswordForm />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import PasswordForm from '../components/PasswordForm'
import validations from '@/utils/validations'
export default {
  name: 'Profile',
  components: { PasswordForm },
  data: () => ({
    modelstate: {},
    ...validations
  }),
  head: {
    title: 'Profile'
  //   meta: [
  //     { hid: 'description', name: 'description', content: 'Modify your name, email, and password' }
  //   ]
  },
  computed: {
    ...mapFields({
      userName: 'auth.user.name',
      userEmail: 'auth.user.email'
    })
  },
  methods: {
    async change () {
      if (this.$refs.form.validate()) {
        this.modelstate = {}
        await this.$axios.$put('profile', this.$auth.user).then(() => {
          this.$store.dispatch('setSnackbar', { text: 'Save Changes' })
        })
          .catch((error) => {
            if (error.response.status === 422) {
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
