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
        <v-col>
          <v-menu offset-y close-on-content-click>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                color="primary"
              >
                Export
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="manga_export">
                <v-list-item-icon>
                  <v-icon>mdi-book-open</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Manga</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="anime_export">
                <v-list-item-icon>
                  <v-icon>mdi-youtube-tv</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Anime</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col offset-md="6" offset-lg="8" offset-xl="8">
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
  head () {
    return {
      title: 'Profile'
      //   meta: [
      //     { hid: 'description', name: 'description', content: 'Modify your name, email, and password' }
      //   ]
    }
  },
  computed: {
    ...mapFields({
      userName: 'auth.user.name',
      userEmail: 'auth.user.email'
    })
  },
  methods: {
    async manga_export () {
      await this.$axios.$get('export/manga', { responseType: 'blob' }).then((response) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const e = document.createEvent('MouseEvents')
          const a = document.createElement('a')
        a.download = `manga_id_${this.$auth.user.id}.xlsx`
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', a.download, a.href].join(':')
        e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
      })
    },
    async anime_export () {
      await this.$axios.$get('export/anime', { responseType: 'blob' }).then((response) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const e = document.createEvent('MouseEvents')
        const a = document.createElement('a')
        a.download = `anime_id_${this.$auth.user.id}.xlsx`
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', a.download, a.href].join(':')
        e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
      })
    },
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
