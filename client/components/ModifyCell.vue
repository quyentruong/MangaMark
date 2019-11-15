<template>
  <v-edit-dialog
    :return-value.sync="cell.item[columnName]"
    @save="save(cell.item)"
    @cancel="cancel(cell)"
    @open="open"
    persistent
    large
  >
    <span :id="columnName === 'name' ? 'itemName': ''">{{ cell.item[columnName] }}</span>
    <template v-slot:input>
      <v-text-field
        v-model="cell.item[columnName]"
        :type="columnName==='name'?'text':'number'"
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
    }
  },
  created () {
    this.enabled = this.$warehouse.get('slot', 'Manga')
  },
  methods: {
    save (action) {
      const item = action
      item.action = this.columnName === 'name' ? 'name' : 'number'

      this.$axios.$put(`category/${this.enabled.toLowerCase()}/${item.id}`, item).then(() => {
        this.$store.dispatch('setSnackbar', { text: 'Data saved' })
      }).catch((error) => {
        if (error.response.status === 422) {
          this.$emit('modifyItem')
          this.$store.dispatch('setSnackbar', { color: 'error', text: error.response.data.error[this.columnName][0] })
        }
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
    #itemName {
      font-family: 'Be Vietnam', sans-serif;
      font-size: 17px;
    }
  }
  @media only screen and (min-width: 960px) {
    #itemName {
      font-family: 'Be Vietnam', sans-serif;
      font-size: 26px;
    }
  }
</style>
