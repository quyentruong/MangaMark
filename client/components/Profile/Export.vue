<template>
  <v-menu offset-y close-on-content-click>
    <template #activator="{ on }">
      <v-btn color="primary" v-on="on"> Export Data </v-btn>
    </template>
    <v-list>
      <v-list-item @click="collection_export('manga')">
        <v-list-item-icon>
          <v-icon>mdi-book-open</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Manga</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="collection_export('anime')">
        <v-list-item-icon>
          <v-icon>mdi-youtube-tv</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Anime</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="collection_export('tvshow')">
        <v-list-item-icon>
          <v-icon>mdi-television</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>TVShow</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'Export',
  methods: {
    async collection_export(category) {
      await this.$axios
        .$get(`export/${category}/${this.$auth.user.id}`, {
          responseType: 'blob',
        })
        .then((response) => {
          const blob = new Blob([response], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          })
          const e = document.createEvent('MouseEvents')
          const a = document.createElement('a')
          a.download = `${category}_id_${
            this.$auth.user.id
          }_${this.$moment().format('MMMM_DD_YYYY_h_mm_ss_a')}.xlsx`
          a.href = window.URL.createObjectURL(blob)
          a.dataset.downloadurl = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            a.download,
            a.href,
          ].join(':')
          e.initEvent(
            'click',
            true,
            false,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
          )
          a.dispatchEvent(e)
        })
    },
  },
}
</script>

<style scoped></style>
