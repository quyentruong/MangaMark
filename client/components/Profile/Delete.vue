<template>
  <v-menu offset-y close-on-content-click>
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        color="primary"
      >
        Delete Data
      </v-btn>
    </template>
    <v-list>
      <v-list-item @click="collection_delete('manga')">
        <v-list-item-icon>
          <v-icon>mdi-book-open</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Manga</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="collection_delete('anime')">
        <v-list-item-icon>
          <v-icon>mdi-youtube-tv</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Anime</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'Delete',
  methods: {
    collection_delete (category) {
      const options = {
        title: 'Warning',
        buttonTrueText: 'Delete',
        color: 'red',
        buttonFalseText: 'Cancel'
      }
      this.$confirm(`Do you really want to delete all ${this.$capitalize(category)} data?`, options
      ).then((res) => {
        if (res === true) {
          this.$axios.$delete(`delete/${category}/${this.$auth.user.id}`).then((response) => {
            this.$store.dispatch('setSnackbar', { text: `All ${this.$capitalize(category)} deleted successfully` })
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
