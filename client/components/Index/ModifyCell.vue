<template>
  <v-edit-dialog
    :return-value.sync="cell.item[columnName]"
    @save="save(cell.item)"
    @cancel="cancel(cell)"
    @open="open"
    large
  >
    <template v-if="columnName=== 'other_name'">
      <v-text-field v-if="cell.item[columnName] === null" readonly placeholder="Add other name" />
      <span :class="[columnName === 'name' ? 'itemName': '', oldRead()]" v-else>{{ cell.item[columnName] }}</span>
    </template>
    <span v-else :class="[columnName === 'name' ? 'itemName': '', oldRead()]">{{ compressTitle(cell.item[columnName]) }}</span>
    <template v-slot:input>
      <v-text-field
        v-model="cell.item[columnName]"
        :type="columnName==='name' || columnName==='other_name'?'text':'number'"
        label="Edit"
        single-line
        counter
      />
    </template>
  </v-edit-dialog>
</template>

<script>
export default {
  name: 'ModifyCell',
  props: {
    columnName: {
      type: String,
      default: ''
    },
    cell: {
      type: Object,
      default: () => {
        return {}
      }
    },
    enabled: {
      type: String,
      default: ''
    }
  },
  created () {
    this.enabled = this.$warehouse.get('slot', 'Manga')
  },
  methods: {
    compressTitle (title) {
      if (typeof title === 'string' && (this.$vuetify.breakpoint.name === 'sm' || this.$vuetify.breakpoint.name === 'md')) {
        const words = title.split(' ')
        const lastWordLength = words.length > 0 ? words.pop().length : 0
        const secondLastWordLength = words.length > 0 ? words.pop().length : 0
        const thirdLastWordLength = words.length > 0 ? words.pop().length : 0
        let maxLength = title.length

        if (this.$vuetify.breakpoint.name === 'sm') {
          maxLength = 40 - lastWordLength - secondLastWordLength - thirdLastWordLength
          if (maxLength < 0) { maxLength = 40 - lastWordLength - secondLastWordLength }
        }

        if (this.$vuetify.breakpoint.name === 'md') {
          maxLength = 50 - lastWordLength - secondLastWordLength - thirdLastWordLength
          if (maxLength < 0) { maxLength = 50 - lastWordLength - secondLastWordLength }
        }
        if (title.length > maxLength) {
          return title.substr(0, maxLength).trim() + '+'
        }
      }
      return title
    },
    oldRead () {
      const lastRead = this.$moment.utc(this.cell.item.updated_at).local().format('YYYY-MM-DD HH:mm:ss')
      const now = this.$moment()
      const diff = now.diff(lastRead, 'days')
      if (diff >= 30) {
        return 'old'
      } else {
        return ''
      }
    },
    save (action) {
      const item = action
      item.action = this.columnName === 'name' ? 'name' : this.columnName === 'other_name' ? 'other_name' : 'number'

      this.$axios.$put(`category/${this.enabled.toLowerCase()}/${item.id}`, item).then(() => {
        this.$store.dispatch('setSnackbar', { text: item.name + ' updated' })
      }).catch((error) => {
        if (error.response.status === 422) {
          this.$store.dispatch('setSnackbar', { color: 'error', text: error.response.data.error[this.columnName][0] })
        }
      }).finally(() => {
        this.$emit('modifyItem')
      })
    },
    cancel () {
      this.$store.dispatch('setSnackbar', { color: 'error', text: 'Canceled' })
    },
    open () {
      this.$store.dispatch('setSnackbar', { color: 'info', text: 'Editing' })
    }
  }
}
</script>

<style scoped>
  @media only screen and (min-width: 600px) {
    .itemName {
      font-family: 'Be Vietnam', sans-serif;
      font-size: 17px;
    }
  }

  @media only screen and (min-width: 960px) {
    .itemName {
      font-family: 'Be Vietnam', sans-serif;
      font-size: 26px;
    }
  }

  .old {
    text-decoration: line-through;
  }
</style>
