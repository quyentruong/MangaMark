<template>
  <v-menu offset-y close-on-content-click>
    <template #activator="{ on }">
      <v-btn color="primary" v-on="on"> Import Data </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-book-open</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Manga</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-file-input
            v-model="collection_file"
            :clearable="false"
            hide-input
            prepend-icon="mdi-upload"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            @change="collection_import('manga')"
          />
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-youtube-tv</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Anime</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-file-input
            v-model="collection_file"
            :clearable="false"
            hide-input
            prepend-icon="mdi-upload"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            @change="collection_import('anime')"
          />
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-television</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>TVShow</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-file-input
            v-model="collection_file"
            :clearable="false"
            hide-input
            prepend-icon="mdi-upload"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            @change="collection_import('tvshow')"
          />
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'Import',
  data: () => ({
    collection_file: new File([''], 'collection'),
  }),
  methods: {
    async collection_import(category) {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
      const formData = new FormData()
      formData.append('xlsx', this.collection_file)
      formData.append('id', this.$auth.user.id.toString())
      await this.$axios
        .$post(`import/${category}`, formData, config)
        .then(() => {
          this.$store.dispatch('setSnackbar', {
            text: `${this.$capitalize(category)} imported successfully`,
          })
          this.collection_file = new File([''], 'Manga')
        })
        .catch((error) => {
          if (error.response.status === 422 || error.response.status === 500) {
            this.modelstate = error.response.data.error
            this.$store.dispatch('setSnackbar', {
              color: 'error',
              text: `${this.$capitalize(
                category
              )} imported unsuccessfully. Please correct and submit again.`,
            })
          }
        })
    },
  },
}
</script>

<style scoped></style>
